import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

// Images
import ProjectTwelveImageOne from "../images/project-page-images/project-12/about-section.png";
import ProjectTwelveImageTwo from "../images/project-page-images/project-12/garden-section.png";
import ProjectTwelveImageThree from "../images/project-page-images/project-12/paving-section.png";
import ProjectTwelveImageFour from "../images/project-page-images/project-12/portfolio-section.png";
import ProjectTwelveImageFive from "../images/project-page-images/project-12/contact-section.png";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="container rounded-sm mx-auto drop-shadow-md overflow-hidden mb-4">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-5 sm:p-8">
        <div className="p-5 grid gap-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-6 sm:mt-8">
          <h1 className="lg:col-start-2 lg:col-end-6 mb-6 xs:mr-0 lg:ml-6 lg:text-8xl sm:text-6xl text-5xl font-title text-gray-800 self-end">
            {t("Project.10")}
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-gray-600 text-base justify-self-center border-t-2 border-l-4 border-teal-500 border-opacity-80 p-5">
            {t("ProjectContent.10")}
          </p>

          <div className="sm:row-start-3 lg:col-start-3 lg:col-end-6 sm:mt-3 ml-6">
            <div className="sm:ml-6 ml-0 sm:text-base text-sm">
              <ul className="flex flex-row flex-wrap sm:gap-8 gap-5 font-bold text-gray-800">
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.12")}</p>
                </li>
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.15")}</p>
                </li>
                <li className="">
                  <p className="">Virtual DJ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:p-10 md:pl-16 md:pr-16 sm:mb-2 mb-5">
          <img
            src={ProjectTwelveImageOne}
            alt="Desktop image of project - homepage - hero and navbar"
            className="h-full w-full object cover"
          />
          <img
            src={ProjectTwelveImageTwo}
            alt="Desktop image of project - about section"
            className="h-full w-full object cover"
          />
          <img
            src={ProjectTwelveImageThree}
            alt="Desktop image of project - features"
            className="h-full w-full object cover"
          />
          <img
            src={ProjectTwelveImageFour}
            alt="Desktop image of project - latest news"
            className="h-full w-full object cover"
          />
          <img
            src={ProjectTwelveImageFive}
            alt="Desktop image of project - footer"
            className="h-full w-full object cover"
          />
        </div>

        <div className="text-center sm:mb-3">
          <Link to="/" className="text-ivory sm:text-lg text-base">
            <button className="bg-teal-500 hover:bg-teal-200 font-bold p-2 rounded-md border-2 border-gray-600 drop-shadow-md">
              {t("OtherProjects.1")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
