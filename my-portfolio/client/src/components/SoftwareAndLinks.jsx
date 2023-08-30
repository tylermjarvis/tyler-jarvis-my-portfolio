import { Link } from "react-router-dom";
import GitHub from "../images/project-page-images/github-white.png";
import ExternalLink from "../images/project-page-images/external-link-white.png";

const SoftwareAndLinks = () => {
  return (
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

      <div className="sm:mt-8 mt-4 sm:ml-6 ml-0 sm:text-lg text-sm">
        <ul className="flex flex-row flex-wrap gap-4 font-bold text-ivory">
          <li className="">
            <Link
              to="https://github.com/tylermjarvis"
              className="flex flex-row bg-teal-500 hover:bg-teal-200 sm:px-8 p-2 px-6 rounded-md border-2 border-gray-600 drop-shadow-md"
              target="_blank"
            >
              <p className="">Code</p>
              <img
                className="p-1 w-5 h-5 sm:w-6 sm:h-6 bg-fill-ivory"
                src={GitHub}
                alt="javascript"
              />
            </Link>
          </li>
          <li className="">
            <Link
              to="https://react-online-shop-x0gf.onrender.com"
              className="flex flex-row bg-teal-500 hover:bg-teal-200 p-2 rounded-md border-2 border-gray-600 drop-shadow-md"
              target="_blank"
            >
              <p className="">Live Demo</p>
              <img
                className="p-1 w-5 h-5 sm:w-6 sm:h-6 bg-fill-ivory"
                src={ExternalLink}
                alt="javascript"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* 
      Different styled buttons
      <div className="sm:mt-8 mt-4 sm:ml-6 ml-0 sm:text-lg text-sm">
        <ul className="flex flex-row flex-wrap gap-4 font-bold text-gray-600">
          <li className="bg-white hover:bg-deep-orange-100 font-bold p-2 border-2 border-deep-orange-200 border-opacity-80 shadow-md">
            <Link
              to="https://github.com/tylermjarvis"
              className="flex flex-row"
              target="_blank"
            >
              <p className="">Code</p>
              <img
                className="p-1 w-5 h-5 sm:w-6 sm:h-6"
                src={GitHub}
                alt="javascript"
              />
            </Link>
          </li>
          <li className="bg-white hover:bg-deep-orange-100 font-bold p-2 border-2 border-deep-orange-200 border-opacity-80 shadow-md">
            <Link
              to="https://react-online-shop-x0gf.onrender.com"
              className="flex flex-row"
              target="_blank"
            >
              <p className="">Live Demo</p>
              <img
                className="p-1 w-5 h-5 sm:w-6 sm:h-6"
                src={ExternalLink}
                alt="javascript"
              />
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default SoftwareAndLinks;
