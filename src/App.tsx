import { useState, useEffect } from 'react';
import type { Language, VehicleType } from './types';
import { translations, languages } from './translations';
import { useSeatManagement } from './hooks/useSeatManagement';
import { useFeeCalculation } from './hooks/useFeeCalculation';
import { Header } from './components/Header';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { BasicSetupCard } from './components/BasicSetupCard';
import { CollectionTrackerCard } from './components/CollectionTrackerCard';
import { ChangeCalculatorCard } from './components/ChangeCalculatorCard';
import { PassengerTrackerCard } from './components/PassengerTrackerCard';
import { ConductorTipsCard } from './components/ConductorTipsCard';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[1]); // Arabic default
  const [vehicleType, setVehicleType] = useState<VehicleType>('microbus');
  const [totalPassengers, setTotalPassengers] = useState<string>('0');

  const t = translations[currentLanguage.code];

  // Custom hooks
  const {
    getSeatRows,
    getSeatStatus,
    toggleSeat,
    markAllPaid,
    resetAll,
    getStatistics
  } = useSeatManagement(vehicleType, (feeAmount) => {
    // Auto-update collected amount when seat is marked as paid
    const currentCollected = parseFloat(collectedAmount) || 0;
    setCollectedAmount((currentCollected + feeAmount).toString());
  });

  const {
    feePerPerson,
    setFeePerPerson,
    collectedAmount,
    setCollectedAmount,
    payingAmount,
    setPayingAmount,
    calculateTotals
  } = useFeeCalculation();

  // Update passenger count based on occupied seats
  useEffect(() => {
    const stats = getStatistics();
    setTotalPassengers(stats.occupiedPassengers.toString());
  }, [getStatistics]);

  // Set document direction and language
  useEffect(() => {
    document.documentElement.dir = currentLanguage.dir;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  const passengerCount = parseInt(totalPassengers) || 0;
  const statistics = getStatistics();
  const { totalExpected, remaining, changeDue, progress, changeDenominations } = calculateTotals(passengerCount);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const handleMarkAllPaid = () => {
    markAllPaid(parseFloat(feePerPerson) || 0);
    // Note: The collected amount is automatically updated by the hook callback
  };

  const handleResetAll = () => {
    resetAll();
    setCollectedAmount('0');
    setPayingAmount('');
  };

  return (
    <div 
      className="min-h-screen p-4 md:p-6 lg:p-8 relative"
      style={{
        backgroundImage: 'url(https://img.youm7.com/ArticleImgs/2025/4/9/151088-%D8%AD%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%88%D9%82%D9%81-%D8%A8%D8%A7%D9%84%D8%B7%D8%A7%D8%A8%D9%82-%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <Header t={t} />
        
        <LanguageSwitcher 
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          languages={languages}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <BasicSetupCard
            t={t}
            feePerPerson={feePerPerson}
            setFeePerPerson={setFeePerPerson}
            totalPassengers={totalPassengers}
            setTotalPassengers={setTotalPassengers}
            totalExpected={totalExpected}
          />

          <CollectionTrackerCard
            t={t}
            collectedAmount={collectedAmount}
            setCollectedAmount={setCollectedAmount}
            progress={progress}
            remaining={remaining}
            totalExpected={totalExpected}
          />

          <ChangeCalculatorCard
            t={t}
            payingAmount={payingAmount}
            setPayingAmount={setPayingAmount}
            fee={parseFloat(feePerPerson) || 0}
            changeDue={changeDue}
            changeDenominations={changeDenominations}
          />
        </div>

        {/* Second Row: Passenger Tracker and Tips */}
        <div className="grid lg:grid-cols-3 gap-6">
          <PassengerTrackerCard
            t={t}
            vehicleType={vehicleType}
            setVehicleType={setVehicleType}
            getSeatRows={getSeatRows}
            getSeatStatus={getSeatStatus}
            toggleSeat={toggleSeat}
            markAllPaid={handleMarkAllPaid}
            resetAll={handleResetAll}
            feePerPerson={parseFloat(feePerPerson) || 0}
            statistics={statistics}
          />

          <ConductorTipsCard t={t} />
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-white/80">
        </footer>
      </div>
    </div>
  );
}

export default App;