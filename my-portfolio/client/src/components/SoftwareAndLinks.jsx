import { Link } from "react-router-dom";
import GitHub from "../images/project-page-images/github.avif";
import ExternalLink from "../images/project-page-images/external-link.png";

const SoftwareAndLinks = () => {
  return (
    <div className="sm:row-start-3 lg:col-start-3 lg:col-end-6 sm:mt-3 ml-6">
      <div className="sm:ml-6 ml-0 sm:text-base text-sm">
        <ul className="flex flex-row flex-wrap sm:gap-8 gap-1 font-bold text-gray-800">
          <li className="">
            <p className="">React</p>
          </li>
          <li className="ml-5">
            <p className="">CSS Grid</p>
          </li>
          <li className="ml-5">
            <p className="">Node.JS</p>
          </li>
        </ul>
      </div>

      <div className="sm:mt-8 mt-4 sm:text-lg text-base">
        <ul className="flex flex-row flex-wrap gap-2 font-bold text-gray-800">
          <li className="ml-0 sm:ml-6">
            <Link
              to="https://github.com/tylermjarvis"
              className="flex flex-row"
              target="_blank"
            >
              <p className="hover:text-cyan-600">Code</p>
              <img
                className="p-1 w-5 h-5 sm:w-6 sm:h-6"
                src={GitHub}
                alt="javascript"
              />
            </Link>
          </li>
          <li className="ml-5">
            <Link
              to="https://react-online-shop-x0gf.onrender.com"
              className="flex flex-row"
              target="_blank"
            >
              <p className="hover:text-cyan-600">Live Demo</p>
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
  );
};

export default SoftwareAndLinks;
