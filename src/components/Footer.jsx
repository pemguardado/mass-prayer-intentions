import { useI18n } from '../i18n.jsx';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-amber-200/20 bg-[#241d4d]/90 py-4 text-center text-sm text-white backdrop-blur-sm">
      <p className="opacity-80">
        &copy; {t('footerCopyright')(new Date().getFullYear())}
      </p>
      <p className="opacity-60 mt-1 text-xs italic">
        {t('footerVerse')}
      </p>
    </footer>
  );
}
