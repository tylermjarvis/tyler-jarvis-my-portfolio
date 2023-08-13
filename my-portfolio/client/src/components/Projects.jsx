import { Link } from "react-router-dom";
import ProjectImage from "../images/projects-full-in-image.webp";

const Projects = () => {
  return (
    <div className="p-10">
      <ul className="">
        <li className="grid gap-x-5 grid-cols-5">
          <div className="p-2 text-center text-neutral-600 hover:text-sky-300">
            <img
              className="rounded-full bg-amber-700 p-1 amber:border-neutral-700 white:bg-neutral-800 mb-2"
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
        </li>
      </ul>
    </div>
  );
};

export default Projects;
