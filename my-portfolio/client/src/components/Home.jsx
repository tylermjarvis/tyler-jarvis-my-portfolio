import Projects from "./Projects";
import NavBar from "./NavBar";
// bg - zinc - 50;
const Home = () => {
  return (
    <div className="container mx-auto drop-shadow-md">
      <header>
        <NavBar />
      </header>
      <div className="bg-white p-8">
        <div className="p-5 grid gap-x-2 grid-rows-2 grid-cols-6 mb-2 mt-8">
          <h1 className="col-start-2 col-end-4 mb-3 ml-6 sm:text-8xl text-3xl font-press-start text-neutral-800">
            Tyler Jarvis
          </h1>
          <p className="col-start-3 col-end-6 mr-8 text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            risus id velit finibus feugiat. Duis luctus non ligula nec interdum.
            Nam eget neque tincidunt, dapibus nulla a, aliquet lorem. Quisque
            cursus tincidunt ornare. Vestibulum venenatis ex eget neque rhoncus,
            in pretium diam pellentesque. Vestibulum vestibulum consequat
            sollicitudin. Donec sollicitudin est ac consequat volutpat.
          </p>
        </div>
        <div className="p-3">
          <h2 className="sm:text-4xl text-2xl font-press-start text-neutral-800">
            Projects
          </h2>
        </div>
        {/* <div className="container mx-auto p-10 border-l-4 border-t-4 border-sky-300"> */}
        <div className="container mx-auto p-3 bg-cover bg-[url(./images/partial-borders-smaller.jpg)] bg-no-repeat">
          <Projects />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
