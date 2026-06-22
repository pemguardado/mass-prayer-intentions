import { useI18n } from '../i18n.jsx';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#1a237e] text-white text-center py-4 text-sm">
      <p className="opacity-80">
        &copy; {t('footerCopyright')(new Date().getFullYear())}
      </p>
      <p className="opacity-60 mt-1 text-xs italic">
        {t('footerVerse')}
      </p>
    </footer>
  );
}
