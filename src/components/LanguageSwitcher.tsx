import type { Language } from '../types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  languages: Language[];
}

export const LanguageSwitcher = ({ currentLanguage, onLanguageChange, languages }: LanguageSwitcherProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white/10 backdrop-blur-md rounded-full p-1 shadow-lg">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang)}
            className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 font-semibold ${
              currentLanguage.code === lang.code
                ? 'bg-white text-indigo-700 shadow-lg scale-105'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};
