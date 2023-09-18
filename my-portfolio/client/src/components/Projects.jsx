import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Images
import ProjectOne from "../images/project-page-images/project-1/restaurant-reservation-project.png";
import ProjectTwo from "../images/project-page-images/project-2/bootstrap-project.png";
import ProjectThree from "../images/project-page-images/project-3/jap-snack-react.png";
import ProjectFour from "../images/project-page-images/project-4/adrenaline-bot-project.png";
import ProjectFive from "../images/project-page-images/project-5/mesozoic-3023-project-final-image-size.png";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:p-10">
      <ul className="">
        <li className="flex flex-row gap-4 flex-wrap justify-center">
          {/* <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/restaurant-reservation-app" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter"
                  src={ProjectOne}
                  alt="MERN stack project"
                  width="250"
                  height="600"
                />
                <figcaption className="absolute text-lg bottom-0 left-16">
                  <div className="flex justify-center">
                    <h2 className="absolute sm:text-2xl text-white bottom-10 sm:bottom-12 border-b-4 border-teal-500 border-opacity-80 bg-gray-800 p-4 bg-opacity-80 rounded-md">
                      {t("Project.1")}
                    </h2>
                  </div>
                  <div className="bg-black bg-opacity-70 p-2 rounded-md text-white">
                    <p className="text-sm sm:text-base">
                      {t("LanguagesAndSoftware.1")}
                    </p>
                  </div>
                </figcaption>
              </Link>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/bootstrap-project" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter"
                  src={ProjectTwo}
                  alt="bootstrap project"
                  width="250"
                  height="600"
                />
                <figcaption className="absolute text-lg bottom-6 left-16 sm:left-14">
                  <div className="flex justify-center">
                    <h2 className="absolute sm:text-2xl text-white bottom-10 sm:bottom-16 border-b-4 border-teal-500 border-opacity-80 bg-black p-4 bg-opacity-70 rounded-md">
                      {t("Project.2")}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3 bg-black bg-opacity-70 p-2 rounded-md text-white">
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.2")}
                    </p>
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.3")}
                    </p>
                  </div>
                </figcaption>
              </Link>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/react-shop-japsnack" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter"
                  src={ProjectThree}
                  alt="react project"
                  width="250"
                  height="600"
                />
                <figcaption className="absolute text-lg bottom-6 left-16 sm:left-14">
                  <div className="flex justify-center">
                    <h2 className="absolute sm:text-2xl text-white bottom-10 sm:bottom-16 border-b-4 border-teal-500 border-opacity-80 bg-black p-4 bg-opacity-70 rounded-md">
                      {t("Project.3")}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3 bg-black bg-opacity-70 p-2 rounded-md text-white">
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.3")}
                    </p>
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.4")}
                    </p>
                  </div>
                </figcaption>
              </Link>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/chatbot-adrenaline-bot" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter"
                  src={ProjectFour}
                  alt="chat-bot project"
                  width="250"
                  height="600"
                />
                <figcaption className="absolute text-lg bottom-6 left-16 sm:left-14">
                  <div className="flex justify-center">
                    <h2 className="absolute sm:text-2xl text-white bottom-10 sm:bottom-16 border-b-4 border-teal-500 border-opacity-80 bg-black p-4 bg-opacity-70 rounded-md">
                      {t("Project.4")}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3 bg-black bg-opacity-70 p-2 rounded-md text-white">
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.5")}
                    </p>
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.6")}
                    </p>
                  </div>
                </figcaption>
              </Link>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/unity-game-mesozoic-3023" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter"
                  src={ProjectFive}
                  alt="unity game"
                  width="250"
                  height="600"
                />
                <figcaption className="absolute text-lg bottom-6 left-20">
                  <div className="flex justify-center">
                    <h2 className="absolute sm:text-2xl text-white bottom-10 sm:bottom-16 border-b-4 border-teal-500 border-opacity-80 bg-black p-4 bg-opacity-70 rounded-md">
                      {t("Project.5")}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3 bg-black bg-opacity-70 p-2 rounded-md text-white">
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.7")}
                    </p>
                    <p className="text-sm sm:text-base bottom-6">
                      {t("LanguagesAndSoftware.8")}
                    </p>
                  </div>
                </figcaption>
              </Link>
            </figure>
          </div> */}

          {/* Card Example */}
          <div className="block rounded-lg bg-gray-800 bg-opacity-80 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Reservationizr App" className="">
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={ProjectOne}
                  alt="MERN stack project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 w-60 text-white ">
                  <h2 className="sm:text-2xl border-b-4 border-teal-500 border-opacity-80">
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

          {/* Card Example */}
          <div className="block rounded-lg bg-gray-800 bg-opacity-80 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Boostrap Portfolio" className="">
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={ProjectTwo}
                  alt="bootstrap project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 w-60 text-white">
                  <h2 className="sm:text-2xl border-b-4 border-teal-500 border-opacity-80">
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

          {/* Card Example */}
          <div className="block rounded-lg bg-gray-800 bg-opacity-80 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Jap Snack" className="">
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={ProjectThree}
                  alt="react project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 w-60 text-white">
                  <h2 className="sm:text-2xl border-b-4 border-teal-500 border-opacity-80">
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

          {/* Card Example */}
          <div className="block rounded-lg bg-gray-800 bg-opacity-80 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Adrenaline Bot" className="">
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={ProjectFour}
                  alt="react project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 w-60 text-white">
                  <h2 className="sm:text-2xl border-b-4 border-teal-500 border-opacity-80">
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

          {/* Card Example */}
          <div className="block rounded-lg bg-gray-800 bg-opacity-80 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75">
            <Link to="/projects/Mesozoic 3023" className="">
              <div className="overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src={ProjectFive}
                  alt="react project"
                  width="250"
                  height="auto"
                />
                <div className="p-4 w-60 text-white">
                  <h2 className="sm:text-2xl border-b-4 border-teal-500 border-opacity-80">
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
      </ul>
    </div>
  );
};

export default Projects;
