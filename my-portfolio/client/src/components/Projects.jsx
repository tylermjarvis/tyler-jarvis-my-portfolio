import { Link } from "react-router-dom";
import LongImage from "../images/long-image.jpeg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:p-10">
      <ul className="">
        <li className="flex flex-row flex-wrap justify-center">
          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-95">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/1" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 sm:text-2xl text-white bottom-16 sm:bottom-20 border-b-4 border-teal-500 border-opacity-80">
                    {t("Project.1")}
                  </h2>
                </div>
                <div className="flex flex-row bg-blue-gray-50 bg-opacity-70 p-2 rounded-md text-gray-800">
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    After Effects
                  </p>
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    Premiere Pro
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-95">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/2" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 sm:text-2xl text-white bottom-16 sm:bottom-20 border-b-4 border-teal-500 border-opacity-80">
                    {t("Project.2")}
                  </h2>
                </div>
                <div className="flex flex-row bg-blue-gray-50 bg-opacity-70 p-2 rounded-md text-gray-800">
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    After Effects
                  </p>
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    Premiere Pro
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-95">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/3" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 sm:text-2xl text-white bottom-16 sm:bottom-20 border-b-4 border-teal-500 border-opacity-80">
                    {t("Project.3")}
                  </h2>
                </div>
                <div className="flex flex-row bg-blue-gray-50 bg-opacity-70 p-2 rounded-md text-gray-800">
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    After Effects
                  </p>
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    Premiere Pro
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-95">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/4" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 sm:text-2xl text-white bottom-16 sm:bottom-20 border-b-4 border-teal-500 border-opacity-80">
                    {t("Project.4")}
                  </h2>
                </div>
                <div className="flex flex-row bg-blue-gray-50 bg-opacity-70 p-2 rounded-md text-gray-800">
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    After Effects
                  </p>
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    Premiere Pro
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-95">
            <figure className="relative max-w-sm drop-shadow-md">
              <Link to="/projects/5" className="">
                <img
                  className="rounded-lg h-72 sm:h-96 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 sm:text-2xl text-white bottom-16 sm:bottom-20 border-b-4 border-teal-500 border-opacity-80">
                    {t("Project.5")}
                  </h2>
                </div>
                <div className="flex flex-row bg-blue-gray-50 bg-opacity-70 p-2 rounded-md text-gray-800">
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    After Effects
                  </p>
                  <p className="sm:px-4 text-sm sm:text-base bottom-6">
                    Premiere Pro
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
