import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const [langButton, setLangButton] = useState("French");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (langButton === "French") {
      i18n.changeLanguage("fr");
      setLangButton("English");
    } else {
      i18n.changeLanguage("en");
      setLangButton("French");
    }
  };

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="container mx-auto text-right p-2 sm:p-5 bg-white">
      <div className="hidden md:block">
        <ul className="text-center inline-grid gap-x-2 grid-cols-3 mr-10 text-gray-600">
          <li className="p-2">
            <button
              className="hover:text-cyan-600"
              onClick={() => handleClick()}
            >
              {langButton}
            </button>
          </li>
          <li className="p-2 border-l-2 border-teal-500 border-opacity-80">
            <Link to="/" className="hover:text-cyan-600">
              {t("NavBar.1")}
            </Link>
          </li>
          <li className="p-2">
            <Link to="/about-me" className="hover:text-cyan-600">
              {t("NavBar.2")}
            </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger Button */}
      <div className="ml-2 grid grid-cols-2 md:hidden">
        <button
          className="text-gray-600 hover:text-cyan-600 justify-self-start ml-2"
          onClick={() => handleClick()}
        >
          {langButton}
        </button>
        <button
          type="button"
          onClick={handleMenu}
          className="inline-flex items-start justify-self-end p-2 rounded-md text-gray-600 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-cyan-600"
        >
          <span className="sr-only">Open Main Menu</span>
          {open === true ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </button>
        {/* Mobile Menu */}
        {open ? (
          <div className="md:hidden col-span-2">
            <div className="px-2 space-y-1 sm:px-3 text-center">
              <ul className="text-gray-600 bg-blue-gray-50 rounded-md block">
                <li className="px-3 py-3 mt-2">
                  <Link to="/" className="hover:text-cyan-600">
                    {t("NavBar.1")}
                  </Link>
                </li>
                <li className="px-3 py-3">
                  <Link to="/about-me" className="hover:text-cyan-600">
                    {t("NavBar.2")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
