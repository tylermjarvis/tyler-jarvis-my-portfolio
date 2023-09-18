import Projects from "./Projects";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="container rounded-sm mx-auto drop-shadow-md overflow-hidden">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-5 sm:p-8">
        <div className="p-5 grid gap-2 sm:grid-cols-1 sm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 lg:grid-cols-6 mb-6 sm:mb-10 sm:mt-8">
          <h1 className="lg:col-start-2 lg:col-end-5 mb-3 xs:mr-0 lg:ml-6 sm:text-8xl text-5xl font-title text-gray-800 self-end">
            {t("NavBar.2")}
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-gray-600 text-base justify-self-center border-t-2 border-l-4 border-teal-500 border-opacity-80 p-5">
            {t("AboutMe.1")}
          </p>
        </div>
        <div className="flex items-center py-4">
          <div className="flex-grow h-0.5 bg-teal-500 border-opacity-80"></div>

          <span className="flex-shrink text-4xl text-gray-800 px-4 font-title">
            {t("Projects.1")}
          </span>

          <div className="flex-grow h-0.5 bg-teal-500 border-opacity-80"></div>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default AboutMe;
