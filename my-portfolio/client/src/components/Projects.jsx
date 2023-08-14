import { Link } from "react-router-dom";
import ProjectImage from "../images/projects-full-in-image.webp";
// import LongImage from "../images/long-image.jpeg";

const Projects = () => {
  return (
    <div className="p-10">
      <ul className="">
        <li className="grid gap-x-5 grid-cols-5">
          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <img
              className="bg-amber-700 p-1 amber:border-neutral-700 white:bg-neutral-800 mb-2"
              src={ProjectImage}
              alt="projects"
            />
            <Link to="/projects/1" className="">
              Project 1
            </Link>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <img
              className="rounded border bg-amber-700 p-1 amber:border-neutral-700 white:bg-neutral-800 mb-2"
              src={ProjectImage}
              alt="projects"
            />
            <Link to="/projects/2" className="">
              Project 2
            </Link>
          </div>
          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <img
              className="rounded-full bg-amber-700 p-1 amber:border-neutral-700 white:bg-neutral-800 mb-2"
              src={ProjectImage}
              alt="projects"
            />
            <Link to="/projects/3" className="">
              Project 3
            </Link>
          </div>
          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <img
              className="rounded border bg-amber-700 p-1 amber:border-neutral-700 white:bg-neutral-800 mb-2"
              src={ProjectImage}
              alt="projects"
            />
            <Link to="/projects/4" className="">
              Project 4
            </Link>
          </div>
          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <img
              className="rounded-full bg-amber-700 p-1 amber:border-neutral-700 white:bg-neutral-800 mb-2"
              src={ProjectImage}
              alt="projects"
            />
            <Link to="/projects/5" className="">
              Project 5
            </Link>
          </div>

          {/* 
          Test with longer images using figures and figcaption
          
          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <Link to="/projects/1" className="">
                <img className="rounded-lg" src={LongImage} alt="projects" />
              </Link>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>
                  Quisque cursus tincidunt ornare. Vestibulum venenatis ex eget
                  neque rhoncus, in pretium diam pellentesque. Vestibulum
                  vestibulum consequat sollicitudin. Donec sollicitudin est ac
                  consequat volutpat.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <Link to="/projects/2" className="">
                <img className="rounded-lg" src={ProjectImage} alt="projects" />
              </Link>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Project 2</p>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <Link to="/projects/3" className="">
                <img className="rounded-lg" src={ProjectImage} alt="projects" />
              </Link>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Project 3</p>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <Link to="/projects/4" className="">
                <img className="rounded-lg" src={ProjectImage} alt="projects" />
              </Link>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Project 4</p>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <Link to="/projects/5" className="">
                <img className="rounded-lg" src={ProjectImage} alt="projects" />
              </Link>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>Project 5</p>
              </figcaption>
            </figure>
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default Projects;
