import { Carousel } from "@material-tailwind/react";
import ProjectImageOne from "../images/project-page-images/project-1/image-test-1.jpeg";

const ProjectCarousel = () => {
  return (
    <Carousel
      className="rounded-lg"
      transition={{ duration: 2 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={ProjectImageOne}
        alt="Image of project 1"
        className="h-full w-full object cover"
      />
      <img
        src={ProjectImageOne}
        alt="Image of project 2"
        className="sm:h-full max-h-96 w-full object cover"
      />
      <img
        src={ProjectImageOne}
        alt="Image of project 3"
        className="h-full w-full object cover"
      />
    </Carousel>
  );
};

export default ProjectCarousel;
