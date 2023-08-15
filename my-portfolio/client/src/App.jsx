// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div className="bg-cover p-10 bg-[url(./images/portfolio-background-bird-of-paradise-light-blue.jpg)] bg-no-repeat">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
