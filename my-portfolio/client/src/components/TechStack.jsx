import HTML from "../images/tech-stack/html5.png";
import CSS from "../images/tech-stack/css3.png";
import JavaScript from "../images/tech-stack/javascript.png";
import ReactImage from "../images/tech-stack/react.png";
import Jest from "../images/tech-stack/jest.png";
import NodeJS from "../images/tech-stack/nodejs.png";
import Docker from "../images/tech-stack/docker.webp";
import MongoDB from "../images/tech-stack/mongoDB.webp";

const TechStack = () => {
  return (
    <div className="lg:col-start-3 lg:col-end-6 sm:mt-3 sm:p-5">
      <ul className="flex flex-row flex-wrap">
        <li className="">
          <img
            className="p-1 w-10 h-10 ml-3 sm:w-14 sm:h-14"
            src={HTML}
            alt="html"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-10 h-10 ml-3 sm:w-14 sm:h-14"
            src={CSS}
            alt="css"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-10 h-10 ml-3 sm:w-14 sm:h-14"
            src={JavaScript}
            alt="javascript"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-10 h-10 ml-3 sm:w-14 sm:h-14"
            src={ReactImage}
            alt="react"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-10 h-10 ml-3 sm:w-14 sm:h-14"
            src={Jest}
            alt="jest"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-10 h-8 ml-3 sm:w-16 sm:h-12"
            src={NodeJS}
            alt="node js"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-10 h-10 ml-3 sm:w-14 sm:h-14"
            src={Docker}
            alt="docker"
          />
        </li>
        <li className="">
          <img
            className="p-1 w-11 h-12 ml-3 sm:w-16 sm:h-16"
            src={MongoDB}
            alt="mongoDB"
          />
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
