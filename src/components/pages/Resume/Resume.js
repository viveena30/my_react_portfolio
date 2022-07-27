import React from "react";
import Title from "../../Title";
import "./Resumestyle.css";

const Resume = () => {
  return (
    <>
      <div id="resume"></div>
      <div className="resume">
        <Title title={"Resume"} span={"Resume"} />
        <div className="intro-lines">
        Being in a student I have developed skills and gained some experience.
        </div>

        <div className="resume-row">
          <div className="resume-col">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>Viveena Rathi</h4>
              <p>
                <em>
                  Innovative and deadline-driven upcoming Software Engineer with
                  experience in Coding and developing skills and deep diving
                  more into the world of tech. Mostly interested in Full Stack
                  web development, Competitive Programming, Cloud Computing and
                  Content Writting.
                </em>
              </p>
              <ul>
                <li>Vadodara, Gujarat, India</li>
                <li>(+91) 6353300284</li>
                <li>viveena30@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Government Engineering College</h4>
              <h5>2020 - 2024 batch</h5>
              <p>
                <em>Bachelor of Engineering in Computer Engineering</em>
              </p>
              <p>
                I am currently pursuing Computer SCience and engineering and
                following is my current CPI score.
              </p>
              <ul>
                <li> 9.24 CPI</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Sabari Vidyalaya</h4>
              <h5>2020 Passout</h5>
              <p>
                <em></em>
              </p>
              <p>I completed class 12 in Computer Science Stream.</p>
            </div>
          </div>
          <div className="resume-col">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Secretary</h4>
              <h5>June 2022 - Present</h5>
              <p>
                <em>Club IDE, GECG</em>
              </p>
              <p>
                Leading a group of Student Developers to build solutions for
                local communities and explore and learn more about technologies.{" "}
              </p>
            </div>
            
            <div className="resume-item">
              <h4>Website Developer</h4>
              <h5>March 2022 - May 2022</h5>
              <p>
                <em>Funssignment</em>
              </p>
              <p>
                Gathering and analyzing data to products. Handling the
                community's official social media accounts.
              </p>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer Intern</h4>
              <h5>October 2021 - January 2022</h5>
              <p>
                <em>Aakansha, Delhi</em>
              </p>
              <p>Planned and executed digital marketing strategies</p>
            </div>
            <div className="resume-item">
              <h4>HR Lead</h4>
              <h5>October 2021 - December 2022</h5>
              <p>
                <em>Teen Chapter, Bengaluru</em>
              </p>
              <p>Planned and executed digital marketing strategies</p>
            </div>
            <div className="resume-item">
              <h4> Pioneer ~ Content Writer</h4>
              <h5>August 2021 - January 2022</h5>
              <p>
                <em>DoCoNation, Bengaluru</em>
              </p>
              <p>Planned and executed digital marketing strategies</p>
            </div>
          </div>
          <div className="resume-col">
            <h3 className="resume-title">Volunteer work</h3>
            <div className="resume-item">
              <h4> Core Team Member</h4>
              <p>
                <em>Google Developer Student Club - Gandhinagar</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Student Co-ordinator </h4>
              <h5>May 2021 - May 2022 </h5>
              <p>
                <em>Club IDE, GECG</em>
              </p>
              <p>
                Leading a group of Student Developers to build solutions for
                local communities and explore and learn more about technologies.{" "}
              </p>
            </div>
            {/* <div className="resume-item">
              <h4>Campus Ambassador</h4>
              <p>
                <em>INNOVA DTU</em>
              </p>
            </div> */}
          </div>
          <div className="resume-col">
            <h3 className="resume-title">Language &amp;Proficiencies</h3>
            <div className="resume-item">
              <h4>English</h4>
              <p>
                <em>(speak, read, write)</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Hindi</h4>
              <p>
                <em>(speak, read, write)</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Gujarati</h4>
              <p>
                <em>(speak, read)</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
