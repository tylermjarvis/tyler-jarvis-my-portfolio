import Projects from "./Projects";
import NavBar from "./NavBar";

const AboutMe = () => {
  return (
    <div className="container mx-auto drop-shadow-md">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-8">
        <div className="p-5 grid gap-x-2 grid-rows-2">
          <h1 className="col-span-2 mb-3 ml-6 sm:text-8xl text-3xl font-press-start">
            About Me
          </h1>
          <p className="col-start-2 col-end-4 mr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            risus id velit finibus feugiat. Duis luctus non ligula nec interdum.
            Nam eget neque tincidunt, dapibus nulla a, aliquet lorem. Quisque
            cursus tincidunt ornare. Vestibulum venenatis ex eget neque rhoncus,
            in pretium diam pellentesque. Vestibulum vestibulum consequat
            sollicitudin. Donec sollicitudin est ac consequat volutpat.
          </p>
        </div>
        <div className="container mx-auto p-10">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
