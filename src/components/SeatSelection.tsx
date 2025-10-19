import { CheckCircle2, XCircle } from 'lucide-react';
import type { VehicleType } from '../types';

interface SeatSelectionProps {
  vehicleType: VehicleType;
  setVehicleType: (type: VehicleType) => void;
  getSeatRows: () => Array<{ leftSeats: number[]; rightSeats: number[] }>;
  getSeatStatus: (seatNumber: number) => 'empty' | 'occupied' | 'paid';
  toggleSeat: (seatNumber: number, feePerPerson?: number) => void;
  feePerPerson: number;
}

export const SeatSelection = ({
  vehicleType,
  setVehicleType,
  getSeatRows,
  getSeatStatus,
  toggleSeat,
  feePerPerson
}: SeatSelectionProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Vehicle Type Selection */}
      <div className="flex justify-center gap-4 mb-4">
        <button 
          onClick={() => setVehicleType('microbus')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            vehicleType === 'microbus' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ميكروباص (14-18 راكب)
        </button>
        <button 
          onClick={() => setVehicleType('minibus')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            vehicleType === 'minibus' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ميني باص (24-35 راكب)
        </button>
      </div>

      {/* 3D Seat Map */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-inner">
        {/* Front Section - Driver + 2 passengers */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
            🚗 السائق
          </div>
        </div>
        
        {/* Front Row - 2 seats beside driver */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => toggleSeat(1, feePerPerson)}
              className={`w-16 h-16 rounded-xl border-2 transition-all duration-300 transform hover:scale-110 ${
                getSeatStatus(1) === 'paid'
                  ? 'bg-green-500 text-white border-green-400 shadow-lg'
                  : getSeatStatus(1) === 'occupied'
                  ? 'bg-gray-400 text-white border-gray-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-sm font-bold">1</span>
                {getSeatStatus(1) === 'paid' && <CheckCircle2 className="w-4 h-4" />}
                {getSeatStatus(1) === 'occupied' && <XCircle className="w-4 h-4" />}
              </div>
            </button>
            <button
              onClick={() => toggleSeat(2, feePerPerson)}
              className={`w-16 h-16 rounded-xl border-2 transition-all duration-300 transform hover:scale-110 ${
                getSeatStatus(2) === 'paid'
                  ? 'bg-green-500 text-white border-green-400 shadow-lg'
                  : getSeatStatus(2) === 'occupied'
                  ? 'bg-gray-400 text-white border-gray-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-sm font-bold">2</span>
                {getSeatStatus(2) === 'paid' && <CheckCircle2 className="w-4 h-4" />}
                {getSeatStatus(2) === 'occupied' && <XCircle className="w-4 h-4" />}
              </div>
            </button>
          </div>
        </div>

        {/* Main Seating Area */}
        <div className="space-y-3">
          {getSeatRows().map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-4">
              {/* Left Side Seats */}
              <div className="flex gap-2">
                {row.leftSeats.map((seatNum) => (
                  <button
                    key={seatNum}
                    onClick={() => toggleSeat(seatNum, feePerPerson)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 transform hover:scale-110 ${
                      getSeatStatus(seatNum) === 'paid'
                        ? 'bg-green-500 text-white border-green-400 shadow-lg'
                        : getSeatStatus(seatNum) === 'occupied'
                        ? 'bg-gray-400 text-white border-gray-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="text-xs font-bold">{seatNum}</span>
                      {getSeatStatus(seatNum) === 'paid' && <CheckCircle2 className="w-3 h-3" />}
                      {getSeatStatus(seatNum) === 'occupied' && <XCircle className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Aisle */}
              <div className="w-4 flex items-center justify-center">
                <div className="w-1 h-8 bg-yellow-400 rounded-full opacity-60"></div>
              </div>
              
              {/* Right Side Seats */}
              <div className="flex gap-2">
                {row.rightSeats.map((seatNum) => (
                  <button
                    key={seatNum}
                    onClick={() => toggleSeat(seatNum, feePerPerson)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 transform hover:scale-110 ${
                      getSeatStatus(seatNum) === 'paid'
                        ? 'bg-green-500 text-white border-green-400 shadow-lg'
                        : getSeatStatus(seatNum) === 'occupied'
                        ? 'bg-gray-400 text-white border-gray-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="text-xs font-bold">{seatNum}</span>
                      {getSeatStatus(seatNum) === 'paid' && <CheckCircle2 className="w-3 h-3" />}
                      {getSeatStatus(seatNum) === 'occupied' && <XCircle className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rear Door */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            <span>🚪</span>
            <span>الباب الخلفي</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
          <span>مقعد فارغ</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>مدفوع</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400 rounded"></div>
          <span>مشغول</span>
        </div>
      </div>
    </div>
  );
};
