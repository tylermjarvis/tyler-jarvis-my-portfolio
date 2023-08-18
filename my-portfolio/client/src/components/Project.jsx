import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
import SoftwareAndLinks from "./SoftwareAndLinks";
import ProjectCarousel from "./Carousel";

const Project = () => {
  const { id } = useParams();
  return (
    <div className="container rounded-sm mx-auto drop-shadow-md overflow-hidden mb-4">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-5 sm:p-8">
        <div className="p-5 grid gap-x-2 sm:grid-cols-1 sm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 lg:grid-cols-6 lg:grid-rows-2 sm:mt-8">
          <h1 className="lg:col-start-2 lg:col-end-4 mb-6 xs:mr-0 lg:ml-6 sm:text-8xl text-5xl font-title text-gray-800 self-end">
            Project {id}
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-neutral-500 sm:text-base text-xs justify-self-center border-t-2 border-l-4 border-teal-500 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            risus id velit finibus feugiat. Duis luctus non ligula nec interdum.
            Nam eget neque tincidunt, dapibus nulla a, aliquet lorem. Quisque
            cursus tincidunt ornare. Vestibulum venenatis ex eget neque rhoncus,
            in pretium diam pellentesque. Vestibulum vestibulum consequat
            sollicitudin. Donec sollicitudin est ac consequat volutpat.
          </p>

          <SoftwareAndLinks />
        </div>

        <div className="md:p-10 sm:mb-2 mb-5">
          <ProjectCarousel />
        </div>

        <div className="p-2 text-center">
          <button className="hover:scale-105 transition duration-500 cursor-pointer">
            <Link
              to="/"
              className="text-neutral-500 hover:text-cyan-600 sm:text-lg text-base"
            >
              <span className="font-extrabold">· </span>Other Projects
              <span className="font-extrabold"> ·</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
