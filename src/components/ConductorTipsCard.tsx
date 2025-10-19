import type { Translations } from '../types';

interface ConductorTipsCardProps {
  t: Translations;
}

export const ConductorTipsCard = ({ t }: ConductorTipsCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
          <span className="text-2xl">💡</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{t.conductorTips}</h2>
      </div>
      
      <ul className="space-y-3">
        {t.tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-xl">
            <span className="text-xl mt-0.5">✓</span>
            <span className="text-sm leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
