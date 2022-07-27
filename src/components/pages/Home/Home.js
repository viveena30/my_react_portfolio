import React from "react";
import Typed from "react-typed";
import "./Homestyle.css";

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <div className="hero-container">
        <div className="intro-title">
          Hello! I am Viveena. 
          <span className="title-typed">
            <Typed
              strings={[
                "Viveena Rathi",
                "UI/UX Designer",
                "Content Writer",
                "Frontend Developer",
                "Engineer",
                "Backend Developer",
                "Content Creator",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </div>

        <div className="intro-description">
          A team player with strong oral and written communication skills and an
          analytical and problem solving aptitude. I am a highly motivated
          individual with proven leadership skills.
        </div>
        <div className="btn-container">
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <a href="/ResumeViveenaRathi.pdf" target="_blank" className="btn">
            Resume ⬇️
          </a>
        </div>

        <div className="intro-footer">
        Developer. Quick Learner. Innovator. Problem Solver.  

        </div>
      </div>
    </>
  );
};

export default Home;
