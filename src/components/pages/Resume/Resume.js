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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          autem quaerat neque esse a error. Cumque ducimus a saepe sunt!
        </div>

        <div className="resume-row">
          <div className="resume-col">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                <em>
                  Innovative and deadline-driven upcoming Software Engineer with
                  6+ years of experience in Coding and developing skills and
                  deep diving more into the world of tech. Mostly interested in
                  Full Stack web development, Competitive Programming, Cloud
                  Computing and content writting.
                </em>
              </p>
              <ul>
                <li>Nayabd,Kolkata,West Bengal, India</li>
                <li>(+91) 911177074</li>
                <li>vvna2@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B D Memorial International School CBSE</h4>
              <h5>2020 Passout</h5>
              <p>
                <em> className 10 and className 12</em>
              </p>
              <p>
                I completed className 12 in Computer Science Stream. I scored
                81% in secondary Board examinations and 89% in senior secondary
                board examinations
              </p>
            </div>
            <div className="resume-item">
              <h4>Siliguri Institute of technology</h4>
              <h5>2024 Passout</h5>
              <p>
                <em>Bachelor of technology in Computer Sciene</em>
              </p>
              <p>
                I am currently pursuing Computer SCience and engineering and
                following are my CGPAs I scored.
              </p>
              <ul>
                <li>1st year: 9.45 CGPA</li>
              </ul>
            </div>
          </div>
          <div className="rsume-col">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Lead</h4>
              <h5>September 2021 - Present</h5>
              <p>
                <em>Google Developers Student Clubs SIT </em>
              </p>
              <p>
                Leading a group of Student Developers to build solutions for
                local communities and explore and learn more about the Google
                developer technologies.{" "}
              </p>
            </div>
            <div className="resume-item">
              <h4>CONTENT WRITER AND SOCIAL MEDIA MANAGER</h4>
              <h5>August 2021 - present</h5>
              <p>
                <em>GirlScript Foundation Siliguri</em>
              </p>
              <p>
                Gathering and analyzing data to products. Handling the
                community's official social media accounts.
              </p>
            </div>
            <div className="resume-item">
              <h4>CAMPUS HUSTLER</h4>
              <h5>January 2021 - July 2021</h5>
              <p>
                <em>Skillenza SIT</em>
              </p>
              <p>Planned and executed digital marketing strategies</p>
            </div>
          </div>
          <div className="resume-col">
            <h3 className="resume-title">Volunteer work</h3>
            <div className="resume-item">
              <h4>Campus Ambassador</h4>
              <p>
                <em>Techkriti, Indian Institute of Technology Kanpur</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Campus Ambassador</h4>
              <p>
                <em>INNOVA DTU</em>
              </p>
            </div>
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
              <h4>Bengali</h4>
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
