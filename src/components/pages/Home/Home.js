import React from "react";
import Particle from "../../Particles";
import Typed from "react-typed";
import "./Homestyle.css";

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <div className="hero-container">
        <div className="particles-container">

        {/* <Particle /> */}
        </div>
        <div className="intro-title">
          Hello! I am &nbsp;
          <span className="title-typed">
            <Typed
              strings={[
                "Viveena Rathi",
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Designer",
                "Creator Writer",
                "Engineer",
                "Student",
                "Creator",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </div>

        <div className="intro-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          error, debitis qui voluptatem, aut, voluptate aliquid fuga maiores
          ullam laborum ex! Minima qui totam soluta optio repudiandae nemo
          nostrum adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus error, debitis qui voluptatem, aut, voluptate aliquid
          fuga maiores ullam laborum ex! Minima qui totam soluta optio
          repudiandae nemo nostrum adipisci.
        </div>
        <div className="btn-container">
          <a href="#contact" download="Viveena Rathi - RESUME " className="btn">
            Hire Me
          </a>
          <a
            href="provide-proper-link-to-resume"
            download="Viveena Rathi - RESUME "
            className="btn"
          >
            Resume ⬇️
          </a>
        </div>

        <div className="intro-footer">
          Coder. Developer. Designer. Painter. Writer.
        </div>
      </div>
    </>
  );
};

export default Home;
