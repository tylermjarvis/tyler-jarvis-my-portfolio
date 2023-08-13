import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Project {id}</h1>
    </div>
  );
};

export default Project;
