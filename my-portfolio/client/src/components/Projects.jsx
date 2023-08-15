import { Link } from "react-router-dom";
// import ProjectImage from "../images/projects-full-in-image.webp";
import LongImage from "../images/long-image.jpeg";

const Projects = () => {
  return (
    <div className="p-10">
      <ul className="">
        <li className="flex flex-row flex-wrap justify-center">
          {/* <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
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
          </div> */}

          <div className="p-2 text-center">
            <figure className="relative max-w-sm">
              <Link to="/projects/1" className="">
                <img
                  className="rounded-lg h-96 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 text-2xl text-white bottom-20 border-b-4 border-teal-500">
                    Project 1
                  </h2>
                </div>
                <div className="flex flex-row bg-slate-100 bg-opacity-75 p-2 rounded-md text-neutral-700">
                  <p className="px-4 text-lgbottom-6">After Effects</p>
                  <p className="px-4 text-lgbottom-6">Premiere Pro</p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm">
              <Link to="/projects/2" className="">
                <img
                  className="rounded-lg h-96 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 text-2xl text-white bottom-20 border-b-4 border-teal-500">
                    Project 2
                  </h2>
                </div>
                <div className="flex flex-row bg-slate-100 bg-opacity-75 p-2 rounded-md text-neutral-700">
                  <p className="px-4 text-lg bottom-6">After Effects</p>
                  <p className="px-4 text-lg bottom-6">Premiere Pro</p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm">
              <Link to="/projects/3" className="">
                <img
                  className="rounded-lg h-96 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 text-2xl text-white bottom-20 border-b-4 border-teal-500">
                    Project 3
                  </h2>
                </div>
                <div className="flex flex-row bg-slate-100 bg-opacity-75 p-2 rounded-md text-neutral-700">
                  <p className="px-4 text-lg bottom-6">After Effects</p>
                  <p className="px-4 text-lg bottom-6">Premiere Pro</p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm">
              <Link to="/projects/4" className="">
                <img
                  className="rounded-lg h-96 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 text-2xl text-white bottom-20 border-b-4 border-teal-500">
                    Project 4
                  </h2>
                </div>
                <div className="flex flex-row bg-slate-100 bg-opacity-75 p-2 rounded-md text-neutral-700">
                  <p className="px-4 text-lg bottom-6">After Effects</p>
                  <p className="px-4 text-lg bottom-6">Premiere Pro</p>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <figure className="relative max-w-sm">
              <Link to="/projects/5" className="">
                <img
                  className="rounded-lg h-96 hover:scale-105 transition duration-500 cursor-pointer object-cover filter hover:brightness-75"
                  src={LongImage}
                  alt="projects"
                />
              </Link>
              <figcaption className="absolute px-4 text-lg bottom-6">
                <div className="flex justify-center">
                  <h2 className="absolute px-4 text-2xl text-white bottom-20 border-b-4 border-teal-500">
                    Project 5
                  </h2>
                </div>
                <div className="flex flex-row bg-slate-100 bg-opacity-75 p-2 rounded-md text-neutral-700">
                  <p className="px-4 text-lg bottom-6">After Effects</p>
                  <p className="px-4 text-lg bottom-6">Premiere Pro</p>
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
