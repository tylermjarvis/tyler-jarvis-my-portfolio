import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Images
// import ProjectOne from "../images/project-page-images/project-1/restaurant-reservation-project.png";
// import ProjectTwo from "../images/project-page-images/project-2/bootstrap-project.png";
// import ProjectThree from "../images/project-page-images/project-3/jap-snack-react.png";
// import ProjectFour from "../images/project-page-images/project-4/adrenaline-bot-project.png";
// import ProjectFive from "../images/project-page-images/project-5/mesozoic-3023-project-final-image-size.png";
// import ProjectSix from "../images/project-page-images/project-6/project6-glowing-text-large.png";
// import ProjectSeven from "../images/project-page-images/project-7/project7-title-screen.png";
// import ProjectEight from "../images/project-page-images/project-8/project8-3D-projection.png";
// import ProjectNine from "../images/project-page-images/project-9/project9-game-intro.png";
// import ProjectTen from "../images/project-page-images/project-10/project10-egypt-video.png";
// import ProjectEleven from "../images/project-page-images/project-11/the-web-guys-site-long.png";
// import ProjectTwelve from "../images/project-page-images/project-12/project-12-long.png";

import ProjectOne from "../images/project-page-images/project-1/reservation-site-on-tablet.jpg";
import ProjectTwo from "../images/project-page-images/project-2/bootstrap-site-on-tablet.jpg";
import ProjectThree from "../images/project-page-images/project-3/jap-shop-on-phone.jpg";
import ProjectFour from "../images/project-page-images/project-4/chatbot-on-desktop.jpg";
import ProjectFive from "../images/project-page-images/project-5/unity-game-on-phone.jpg";
import ProjectSix from "../images/project-page-images/project-6/project6-glowing-text-wide.png";
import ProjectSeven from "../images/project-page-images/project-7/project7-title-screen-wide.png";
import ProjectEight from "../images/project-page-images/project-8/project8-3D-projection-wide.png";
import ProjectNine from "../images/project-page-images/project-9/project9-game-intro-wide.png";
import ProjectTen from "../images/project-page-images/project-10/project10-egypt-video-wide.png";
import ProjectEleven from "../images/project-page-images/project-11/the-web-guys-site-wide.jpg";
import ProjectTwelve from "../images/project-page-images/project-12/capstone-on-desktop.jpg";
import ProjectThirteen from "../images/project-page-images/project-13/salesforce-project-title.jpg";

const Projects = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sm:p-10">
      <ul className="flex flex-row gap-4 flex-wrap justify-center">
        {/* Reservationizr */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Reservationizr App"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectOne}
                  alt="MERN stack project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.1")}
                  </h2>
                  <p className="text-sm sm:text-base">
                    {t("LanguagesAndSoftware.1")}
                  </p>
                  <p className="text-sm sm:text-base">
                    {t("LanguagesAndSoftware.2")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Bootstrap */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Boostrap Portfolio"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectTwo}
                  alt="bootstrap project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 sm:gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.2")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.3")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.4")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* React Online Shop */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Jap Snack" className="" onClick={scrollToTop}>
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectThree}
                  alt="online shop"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-flow-row sm:gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.3")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.5")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.4")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Chat Bot */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Adrenaline Bot"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectFour}
                  alt="chat bot"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 sm:gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.4")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.6")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.7")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Unity Game */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Mesozoic 3023"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectFive}
                  alt="unity game"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.5")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.8")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.9")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Glowing Text */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Glowing Text"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectSix}
                  alt="3D glowing text video"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.6")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.11")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.12")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Space Ship Title Screen */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Spaceship Title Screen"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectSeven}
                  alt="spaceship title screen"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.7")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.11")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.13")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* 3D Projection */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/3D Projection"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectEight}
                  alt="3d projection"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.8")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.13")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.12")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Unity Game Intro */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Unity Game Intro"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectNine}
                  alt="unity game intro"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.9")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.14")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.12")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Egypt Video */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Egypt Video" className="" onClick={scrollToTop}>
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectTen}
                  alt="thumbnail of egypt video with temple"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.10")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.12")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.15")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Elementor Project */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Elementor Site"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectEleven}
                  alt="elementor site"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.11")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.16")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.17")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Capstone Project */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Capstone Project"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectTwelve}
                  alt="portfolio section of capstone project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.12")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.3")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.6")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Salesforce MasterSeal Documentation */}
        <li className="">
          <div className="block rounded-lg bg-blue-gray-50 bg-opacity-80 border-2 border-gray-400 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Salesfroce MasterSeal"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="p-2 h-44 rounded-t-lg"
                  src={ProjectThirteen}
                  alt="technical documentation from the Salesforce migration for MasterSeal"
                  width="250"
                  height="auto"
                />
                <div className="p-4 pt-0 w-60 text-gray-800 grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-2 border-teal-500 border-opacity-80">
                    {t("Project.13")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.20")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.21")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li>

        {/* Capstone Project
        <li className="">
          <div className="block rounded-lg bg-gray-800 bg-opacity-80 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link
              to="/projects/Capstone Project"
              className=""
              onClick={scrollToTop}
            >
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={ProjectTwelve}
                  alt="portfolio section of capstone project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 w-60 text-white grid grid-row-3 gap-y-4">
                  <h2 className="sm:text-2xl border-b-4 border-teal-500 border-opacity-80">
                    {t("Project.12")}
                  </h2>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.3")}
                  </p>
                  <p className="text-sm sm:text-base bottom-6">
                    {t("LanguagesAndSoftware.6")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Projects;
