import React from "react";
import Title from "../../Title";
import { FaAndroid, FaHtml5, FaCss3, FaJs,FaJava, FaFigma ,FaJenkins, FaJira,FaLinux, FaNodeJs,FaNpm,FaPhp,FaSass,FaUbuntu,FaWordpress,FaGitAlt, FaGithub, FaAws,FaCloud, FaCode, FaReact, FaPython } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

import "./Skillstyle.css";

const Skills = () => {
  return (
    <>
      <div id="skills"></div>
      <div className="skills">
        <Title title={"Skills"} span={"Skills"} />
        <div className="intro-lines">
          Along with studying core computer science subjects including  Operating systems, Database and DBMS, Computer Network, and many more...I have developed several technical skills that can be used for implementation of ideas. I have explored various fields like Web Designing, Web Development, Application Development, Cloud technologies including Google Cloud and AWS. 
        </div>

        <div className="skill-container">
            <div className="skill-icon"><FaCode /></div>
            <div className="skill-icon"><FaFigma /></div>
            <div className="skill-icon"><SiAdobexd /></div>
            <div className="skill-icon"><FaHtml5 /></div>
            <div className="skill-icon"><FaCss3 /></div>
            <div className="skill-icon"><FaSass /></div>
            <div className="skill-icon"><FaJs /></div>
            <div className="skill-icon"><FaNpm /></div>
            <div className="skill-icon"><FaReact /></div>
            <div className="skill-icon"><TbBrandNextjs /></div>
            <div className="skill-icon"><FaNodeJs /></div>
            <div className="skill-icon"><FaJava /></div>
            <div className="skill-icon"><FaAndroid /></div>
            <div className="skill-icon"><FaLinux /></div>
            <div className="skill-icon"><FaUbuntu /></div>
            <div className="skill-icon"><FaPhp /></div>
            <div className="skill-icon"><FaWordpress /></div>
            <div className="skill-icon"><FaPython /></div>
            <div className="skill-icon"><FaGithub /></div>
            <div className="skill-icon"><FaGitAlt /></div>
            <div className="skill-icon"><FaJenkins /></div>
            <div className="skill-icon"><FaCloud /></div>
            <div className="skill-icon"><FaJira /></div>
            <div className="skill-icon"><FaAws /></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
