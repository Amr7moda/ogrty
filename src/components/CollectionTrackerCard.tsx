import { Wallet, Coins } from 'lucide-react';
import type { Translations } from '../types';

interface CollectionTrackerCardProps {
  t: Translations;
  collectedAmount: string;
  setCollectedAmount: (value: string) => void;
  progress: number;
  remaining: number;
  totalExpected: number;
}

export const CollectionTrackerCard = ({
  t,
  collectedAmount,
  setCollectedAmount,
  progress,
  remaining,
  totalExpected
}: CollectionTrackerCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
          <Wallet className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{t.collectionTracker}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t.amountCollected}
          </label>
          <div className="relative">
            <input
              type="number"
              value={collectedAmount}
              onChange={(e) => setCollectedAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none text-lg font-semibold transition-all"
              placeholder={t.enterAmount}
              min="0"
              step="0.5"
            />
            <Coins className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-semibold text-gray-600">
            <span>{t.progress}</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {remaining > 0 ? (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white">
            <p className="text-sm opacity-90 mb-1">{t.stillNeeded}</p>
            <p className="text-3xl font-bold">{remaining.toFixed(2)} EGP</p>
          </div>
        ) : totalExpected > 0 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white">
            <p className="text-lg font-bold text-center">✓ {t.collectionComplete}</p>
          </div>
        )}
      </div>
    </div>
  );
};
