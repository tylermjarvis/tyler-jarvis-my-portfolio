import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import SocialBar from "./components/SocialBar";

function App() {
  return (
    <>
      <div className="object-fill sm:p-10 p-6 pt-8 pb-8 bg-[url(./images/portfolio-background-bird-of-paradise-light-blue-object-fit.jpg)] bg-repeat">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/Reservationizr App" element={<Project1 />} />
          <Route path="/projects/Boostrap Portfolio" element={<Project2 />} />
          <Route path="/projects/Jap Snack" element={<Project3 />} />
          <Route path="/projects/Adrenaline Bot" element={<Project4 />} />
          <Route path="/projects/Mesozoic 3023" element={<Project5 />} />
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
