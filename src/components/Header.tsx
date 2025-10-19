import { Bus } from 'lucide-react';
import type { Translations } from '../types';

interface HeaderProps {
  t: Translations;
}

export const Header = ({ t }: HeaderProps) => {
  return (
    <header className="text-center mb-8 animate-fade-in">
      <div className="flex justify-center items-center gap-3 mb-3">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl animate-bounce-slow">
          <Bus className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          {t.title}
        </h1>
      </div>
      <p className="text-lg md:text-xl text-white/90 drop-shadow">
        {t.subtitle}
      </p>
    </header>
  );
};
