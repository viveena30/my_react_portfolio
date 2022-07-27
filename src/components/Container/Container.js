import React from "react";
import "./style.css";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Resume from "../pages/Resume/Resume";
import Service from "../pages/Service/Service";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact";
import Footer from "../Footer";

const Container = () => {
  return (
    <>
      <div className="home-container">
        <Home />
      </div>
        <div className="section-container"> 
        <About />
        <Skills />
        <Resume />
        <Service />
        <Contact />
        {/* <Portfolio /> */}
        <Footer />
        </div>
    </>
  );
};

export default Container;
