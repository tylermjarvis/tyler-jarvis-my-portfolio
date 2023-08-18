import Projects from "./Projects";
import NavBar from "./NavBar";

const AboutMe = () => {
  return (
    <div className="container rounded-sm mx-auto drop-shadow-md overflow-hidden">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-5 sm:p-8">
        <div className="p-5 grid gap-x-2 sm:grid-cols-1 sm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 lg:grid-cols-6 lg:grid-rows-2 mb-6 sm:mb-10 sm:mt-8">
          <h1 className="lg:col-start-2 lg:col-end-5 mb-3 xs:mr-0 lg:ml-6 sm:text-8xl text-5xl font-title text-gray-800 self-end">
            About Me
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-neutral-500 sm:text-base text-xs justify-self-center border-t-2 border-l-4 border-teal-500 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            risus id velit finibus feugiat. Duis luctus non ligula nec interdum.
            Nam eget neque tincidunt, dapibus nulla a, aliquet lorem. Quisque
            cursus tincidunt ornare. Vestibulum venenatis ex eget neque rhoncus,
            in pretium diam pellentesque. Vestibulum vestibulum consequat
            sollicitudin. Donec sollicitudin est ac consequat volutpat.
          </p>
        </div>
        <div className="flex items-center py-4">
          <div className="flex-grow h-0.5 bg-teal-500"></div>

          <span className="flex-shrink text-4xl text-gray-800 px-4 font-title">
            Projects
          </span>

          <div className="flex-grow h-0.5 bg-teal-500"></div>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default AboutMe;
