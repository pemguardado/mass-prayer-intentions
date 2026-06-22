import { useI18n } from '../i18n.jsx';

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="bg-[#1a237e] text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center">
        <div className="text-4xl mb-2">&#10013;</div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
          {t('churchName')}
        </h1>
        <p className="mt-1 text-amber-200 text-sm md:text-base font-light tracking-wider uppercase">
          {t('pageTitle')}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <label htmlFor="language" className="text-amber-200">
            {t('languageLabel')}:
          </label>
          <select
            id="language"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="rounded-md border border-white/25 bg-white/10 px-2 py-1 text-white outline-none"
          >
            <option value="en" className="text-black">
              {t('languageEnglish')}
            </option>
            <option value="es" className="text-black">
              {t('languageSpanish')}
            </option>
          </select>
        </div>
      </div>
    </header>
  );
}
