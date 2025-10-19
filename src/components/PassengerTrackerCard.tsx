import { Users } from 'lucide-react';
import type { Translations, VehicleType } from '../types';
import { SeatSelection } from './SeatSelection';

interface PassengerTrackerCardProps {
  t: Translations;
  vehicleType: VehicleType;
  setVehicleType: (type: VehicleType) => void;
  getSeatRows: () => Array<{ leftSeats: number[]; rightSeats: number[] }>;
  getSeatStatus: (seatNumber: number) => 'empty' | 'occupied' | 'paid';
  toggleSeat: (seatNumber: number, feePerPerson?: number) => void;
  markAllPaid: (feePerPerson?: number) => void;
  resetAll: () => void;
  feePerPerson: number;
  statistics: {
    paidPassengers: number;
    occupiedPassengers: number;
    emptySeats: number;
  };
}

export const PassengerTrackerCard = ({
  t,
  vehicleType,
  setVehicleType,
  getSeatRows,
  getSeatStatus,
  toggleSeat,
  markAllPaid,
  resetAll,
  feePerPerson,
  statistics
}: PassengerTrackerCardProps) => {
  return (
    <div className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{t.passengerTracker}</h2>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">{t.paidCount}</p>
            <p className="text-2xl font-bold text-green-600">{statistics.paidPassengers}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">مشغول</p>
            <p className="text-2xl font-bold text-orange-600">{statistics.occupiedPassengers - statistics.paidPassengers}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">فارغ</p>
            <p className="text-2xl font-bold text-gray-600">{statistics.emptySeats}</p>
          </div>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
        <SeatSelection
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          getSeatRows={getSeatRows}
          getSeatStatus={getSeatStatus}
          toggleSeat={toggleSeat}
          feePerPerson={feePerPerson}
        />
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => markAllPaid(feePerPerson)}
          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {t.collectFromAll}
        </button>
        <button
          onClick={resetAll}
          className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {t.reset}
        </button>
      </div>
    </div>
  );
};
