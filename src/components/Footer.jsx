import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <div>
  <footer className="footer text-center py-4">
    <div className="copyright">
      <p className="mb-1">
        Copyright © {new Date().getFullYear()} {t('footer.copyright')} <a href="https://themes.3rdwavemedia.com/devcard/bs5/" target="_blank">3rd Wave Media</a>.
      </p>
    </div>
  </footer>
</div>

  );
}
