import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Links from "./Links";
import ProjectCarousel from "./Carousel";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="container rounded-sm mx-auto drop-shadow-md overflow-hidden mb-4">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-5 sm:p-8">
        <div className="p-5 grid gap-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-6 sm:mt-8">
          <h1 className="lg:col-start-2 lg:col-end-5 mb-6 xs:mr-0 lg:ml-6 lg:text-8xl sm:text-6xl text-5xl font-title text-gray-800 self-end">
            {t("Project.5")}
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-gray-600 text-base justify-self-center border-t-2 border-l-4 border-teal-500 border-opacity-80 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            risus id velit finibus feugiat. Duis luctus non ligula nec interdum.
            Nam eget neque tincidunt.
          </p>

          <div className="sm:row-start-3 lg:col-start-3 lg:col-end-6 sm:mt-3 ml-6">
            <div className="sm:ml-6 ml-0 sm:text-base text-sm">
              <ul className="flex flex-row flex-wrap sm:gap-8 gap-5 font-bold text-gray-800">
                <li className="">
                  <p className="">React</p>
                </li>
                <li className="">
                  <p className="">CSS Grid</p>
                </li>
                <li className="">
                  <p className="">Node.JS</p>
                </li>
              </ul>
            </div>
            <Links />
          </div>
        </div>

        <div className="md:p-10 md:pl-16 md:pr-16 sm:mb-2 mb-5">
          <ProjectCarousel />
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
          <Link to="/" className="text-ivory sm:text-lg text-base">
            <button className="bg-teal-500 hover:bg-teal-200 font-bold p-2 rounded-md border-2 border-gray-600 drop-shadow-md">
              Other Projects
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
