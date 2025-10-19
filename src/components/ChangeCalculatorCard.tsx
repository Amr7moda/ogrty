import { Banknote, TrendingUp } from 'lucide-react';
import type { Translations } from '../types';

interface ChangeCalculatorCardProps {
  t: Translations;
  payingAmount: string;
  setPayingAmount: (value: string) => void;
  fee: number;
  changeDue: number;
  changeDenominations: { [key: number]: number };
}

export const ChangeCalculatorCard = ({
  t,
  payingAmount,
  setPayingAmount,
  fee,
  changeDue,
  changeDenominations
}: ChangeCalculatorCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
          <Banknote className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{t.changeCalculator}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t.customerPaying}
          </label>
          <div className="relative">
            <input
              type="number"
              value={payingAmount}
              onChange={(e) => setPayingAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none text-lg font-semibold transition-all"
              placeholder={fee.toFixed(2)}
              min="0"
              step="0.5"
            />
            <TrendingUp className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {parseFloat(payingAmount) > 0 && (
          <>
            <div className={`rounded-2xl p-4 text-white ${changeDue > 0 ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-gradient-to-r from-green-500 to-emerald-600'}`}>
              <p className="text-sm opacity-90 mb-1">{t.changeDue}</p>
              <p className="text-3xl font-bold">
                {changeDue > 0 ? `${changeDue.toFixed(2)} EGP` : t.noChangeNeeded}
              </p>
            </div>

            {changeDue > 0 && Object.keys(changeDenominations).length > 0 && (
              <div className="bg-purple-50 rounded-2xl p-4">
                <p className="text-sm font-semibold text-purple-900 mb-3">{t.suggestedChange}</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(changeDenominations).map(([denom, count]) => {
                    const denomNum = parseFloat(denom);
                    let label = '';
                    if (denomNum >= 1) label = `${denomNum} EGP`;
                    else if (denomNum === 0.5) label = '50 Pt';
                    else if (denomNum === 0.25) label = '25 Pt';
                    
                    return (
                      <div key={denom} className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                        <span className="text-sm font-semibold text-gray-700">{label}</span>
                        <span className="text-sm font-bold text-purple-600">×{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
