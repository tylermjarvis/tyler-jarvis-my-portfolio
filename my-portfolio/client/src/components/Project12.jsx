import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import { Carousel, IconButton } from "@material-tailwind/react";

// Link Images
import GitHub from "../images/project-page-images/github-white.png";
import ExternalLink from "../images/project-page-images/external-link-white.png";

// Images
import ProjectTwelveImageOne from "../images/project-page-images/project-12/home-and-chatbot.png";
import ProjectTwelveImageTwo from "../images/project-page-images/project-12/gardening-example.png";
import ProjectTwelveImageThree from "../images/project-page-images/project-12/enquiry-form.png";
import ProjectTwelveImageFour from "../images/project-page-images/project-12/portfolio-section.png";
import ProjectTwelveImageFive from "../images/project-page-images/project-12/portfolio-page.png";

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
            {t("Project.12")}
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-gray-600 text-base justify-self-center border-t-2 border-l-4 border-teal-500 border-opacity-80 p-5">
            {t("ProjectContent.12")}
          </p>

          <div className="sm:row-start-3 lg:col-start-3 lg:col-end-6 sm:mt-3 ml-6">
            <div className="sm:ml-6 ml-0 sm:text-base text-sm">
              <ul className="flex flex-row flex-wrap sm:gap-8 gap-5 font-bold text-gray-800">
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.3")}</p>
                </li>
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.4")}</p>
                </li>
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.6")}</p>
                </li>
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.19")}</p>
                </li>
              </ul>
            </div>
            <div className="sm:mt-8 mt-4 sm:ml-6 ml-0 sm:text-lg text-sm">
              <ul className="flex flex-row flex-wrap gap-4 font-bold text-ivory">
                <li className="">
                  <Link
                    to="https://github.com/tylermjarvis/capstone-project-landscaping-site"
                    className="flex flex-row bg-teal-500 hover:bg-teal-200 sm:px-8 p-2 px-6 rounded-md border-2 border-gray-600 drop-shadow-md"
                    target="_blank"
                  >
                    <p className="">Code</p>
                    <img
                      className="p-1 w-5 h-5 sm:w-6 sm:h-6"
                      src={GitHub}
                      alt="javascript"
                    />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="https://capstone-project-landscaping-site.onrender.com/"
                    className="flex flex-row bg-teal-500 hover:bg-teal-200 p-2 rounded-md border-2 border-gray-600 drop-shadow-md"
                    target="_blank"
                  >
                    <p className="">{t("Links.1")}</p>
                    <img
                      className="p-1 w-5 h-5 sm:w-6 sm:h-6"
                      src={ExternalLink}
                      alt="javascript"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:p-10 md:pl-16 md:pr-16 sm:mb-2 mb-5">
          <Carousel
            className="rounded-lg"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="teal"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="teal"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
            transition={{ duration: 2 }}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
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
          </Carousel>
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
