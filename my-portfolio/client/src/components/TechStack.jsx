import HTML from "../images/tech-stack/html5.png";
import CSS from "../images/tech-stack/css3.png";
import JavaScript from "../images/tech-stack/javascript.png";
import ReactImage from "../images/tech-stack/react.png";
import Jest from "../images/tech-stack/jest.png";
import NodeJS from "../images/tech-stack/nodejs.png";
import Docker from "../images/tech-stack/docker.png";
import MongoDB from "../images/tech-stack/mongoDB.webp";

const TechStack = () => {
  return (
    <div className="grid gap-x-5 grid-cols-8 row-start-3 lg:col-start-3 lg:col-end-6 mt-3 p-5">
      <img className="p-1" src={HTML} alt="html" />
      <img className="p-1" src={CSS} alt="css" />
      <img className="p-1" src={JavaScript} alt="javascript" />
      <img className="p-1" src={ReactImage} alt="react" />
      <img className="p-1" src={Jest} alt="jest" />
      <img className="p-1" src={NodeJS} alt="node js" />
      <img className="p-1" src={Docker} alt="docker" />
      <img className="p-1" src={MongoDB} alt="mongoDB" />
    </div>
  );
};

export default TechStack;
