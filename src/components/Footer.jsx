import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <div>
  <footer className="footer text-center py-4">
    <div className="copyright">
      <p className="mb-1">
        Copyright © {new Date().getFullYear()} {t('footer.copyright')}
      </p>
    </div>
  </footer>
</div>

  );
}
