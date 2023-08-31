import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <select
      name="language"
      className="appearance-none outline-none"
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSwitcher;
