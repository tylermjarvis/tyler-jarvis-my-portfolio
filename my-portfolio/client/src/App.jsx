import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Project from "./components/Project";
import SocialBar from "./components/SocialBar";

function App() {
  return (
    <>
      <div className="object-fill sm:p-10 p-6 pt-8 pb-8 bg-[url(./images/portfolio-background-bird-of-paradise-light-blue-object-fit.jpg)] bg-repeat">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>

        <div className="">
          <SocialBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
