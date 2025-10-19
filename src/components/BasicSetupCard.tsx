import { Calculator, Users, DollarSign } from 'lucide-react';
import type { Translations } from '../types';

interface BasicSetupCardProps {
  t: Translations;
  feePerPerson: string;
  setFeePerPerson: (value: string) => void;
  totalPassengers: string;
  setTotalPassengers: (value: string) => void;
  totalExpected: number;
}

export const BasicSetupCard = ({
  t,
  feePerPerson,
  setFeePerPerson,
  totalPassengers,
  setTotalPassengers,
  totalExpected
}: BasicSetupCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{t.basicSetup}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t.feePerPerson}
          </label>
          <div className="relative">
            <input
              type="number"
              value={feePerPerson}
              onChange={(e) => setFeePerPerson(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none text-lg font-semibold transition-all"
              placeholder="5.00"
              min="0"
              step="0.5"
            />
            <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t.totalPassengers}
          </label>
          <div className="relative">
            <input
              type="number"
              value={totalPassengers}
              onChange={(e) => setTotalPassengers(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none text-lg font-semibold transition-all"
              placeholder="18"
              min="1"
            />
            <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {totalExpected > 0 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white">
            <p className="text-sm opacity-90 mb-1">{t.totalExpected}</p>
            <p className="text-3xl font-bold">{totalExpected.toFixed(2)} EGP</p>
          </div>
        )}
      </div>
    </div>
  );
};
