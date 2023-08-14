import Projects from "./Projects";
import NavBar from "./NavBar";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <div className="container mx-auto drop-shadow-md">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-8">
        <div className="p-5 grid gap-x-2 sm:grid-cols-1 sm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 lg:grid-rows-3 lg:grid-cols-6 mb-2 mt-8">
          <h1 className="lg:col-start-2 lg:col-end-4 mb-3 xs:mr-0 lg:ml-6 sm:text-8xl text-5xl font-press-start text-neutral-700 self-end">
            Tyler Jarvis
          </h1>
          <p className="xs:mr-0 lg:col-start-3 lg:col-end-6 lg:mr-8 text-neutral-500 sm:text-base text-xs justify-self-center border-t-4 border-l-4 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            risus id velit finibus feugiat. Duis luctus non ligula nec interdum.
            Nam eget neque tincidunt, dapibus nulla a, aliquet lorem. Quisque
            cursus tincidunt ornare. Vestibulum venenatis ex eget neque rhoncus,
            in pretium diam pellentesque. Vestibulum vestibulum consequat
            sollicitudin. Donec sollicitudin est ac consequat volutpat.
          </p>
          <TechStack />
        </div>

        {/*
        Test with title in the middle of two lines
        <div className="flex items-center py-4">
          <div className="flex-grow h-px bg-gray-400"></div>

          <span className="flex-shrink text-2xl text-gray-500 px-4 italic font-light">
            Projects
          </span>

          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        <div className="p-3">
          <h2 className="sm:text-4xl text-2xl font-press-start text-neutral-700">
            Projects
          </h2>
        </div> */}

        <div className="container mx-auto p-3 bg-cover bg-[url(./images/partial-borders-smaller.jpg)] bg-no-repeat">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
