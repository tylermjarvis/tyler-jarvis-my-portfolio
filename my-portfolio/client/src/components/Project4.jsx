import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

// Link Images
import GitHub from "../images/project-page-images/github-white.png";
import ExternalLink from "../images/project-page-images/external-link-white.png";

// Images
import ProjectFourImageOne from "../images/project-page-images/project-4/project4-adrenaline-bot-welcome.webp";
import ProjectFourImageTwo from "../images/project-page-images/project-4/project4-adrenaline-bot-user-name.webp";
import ProjectFourImageThree from "../images/project-page-images/project-4/project4-adrenaline-bot-bungy.webp";
import ProjectFourImageFour from "../images/project-page-images/project-4/project4-adrenaline-bot-fact.webp";

const Project = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  return (
    <div className="container rounded-sm mx-auto drop-shadow-md overflow-hidden mb-4">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-5 sm:p-8">
        <div className="p-5 grid gap-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-6 sm:mt-8">
          <h1 className="lg:col-start-2 lg:col-end-4 mb-6 xs:mr-0 lg:ml-6 lg:text-8xl sm:text-6xl text-5xl font-title text-gray-800 self-end">
            {t("Project.4")}
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-gray-600 text-base justify-self-center border-t-2 border-l-4 border-teal-500 border-opacity-80 p-5">
            {t("ProjectContent.4")}
          </p>

          <div className="sm:row-start-3 lg:col-start-3 lg:col-end-6 sm:mt-3 ml-6">
            <div className="sm:ml-6 ml-0 sm:text-base text-sm">
              <ul className="flex flex-row flex-wrap sm:gap-8 gap-5 font-bold text-gray-800">
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.6")}</p>
                </li>
                <li className="">
                  <p className="">{t("LanguagesAndSoftware.7")}</p>
                </li>
              </ul>
            </div>
            <div className="sm:mt-8 mt-4 sm:ml-6 ml-0 sm:text-lg text-sm">
              <ul className="flex flex-row flex-wrap gap-4 font-bold text-ivory">
                <li className="">
                  <Link
                    to="https://github.com/tylermjarvis/adrenaline-bot"
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
                    to="https://adrenaline-chatbot.onrender.com"
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
              src={ProjectFourImageOne}
              alt="Image of project - Adrenaline Bot welcome speech"
              className="h-full w-full object cover"
            />
            <img
              src={ProjectFourImageTwo}
              alt="Image of project - Adrenaline Bot greeting user"
              className="h-full w-full object cover"
            />
            <img
              src={ProjectFourImageThree}
              alt="Image of project - Adrenaline Bot bungy and skydive example"
              className="h-full w-full object cover"
            />
            <img
              src={ProjectFourImageFour}
              alt="Image of project - Adrenaline Bot offering a fact example"
              className="h-full w-full object cover"
            />
          </Carousel>
        </div>

        {/* <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VrQwxp3KMuU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}

        <div className="text-center sm:mb-3">
          <Link
            to="/"
            className="text-ivory sm:text-lg text-base"
            onClick={scrollToTop}
          >
            <button className="bg-teal-500 hover:bg-teal-200 font-bold p-2 rounded-md border-2 border-gray-600 drop-shadow-md">
              {t("OtherProjects.1")}
            </button>
          </Link>
        </div>

        {/* 
        Different styled button
        <div className="text-center mb-3">
          <button className="bg-white hover:bg-blue-gray-100 font-bold p-2 border-2 border-deep-orange-200 border-opacity-80 shadow-sm">
            <Link to="/" className="text-gray-700 sm:text-lg text-base">
              Other Projects
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
