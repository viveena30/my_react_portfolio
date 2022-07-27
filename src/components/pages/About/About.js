import React from "react";
import "./Aboutstyle.css";
import profile from "../../../assets/profile.jpg";
import rightArrow from "../../../assets/chevron-right.svg";
import Title from "../../Title";

const About = () => {
  return (
    <>
      <div id="about"></div>
      <div className="about">
        <Title title={"About"} span={"About"} />
        <div className="intro-lines">
          Hey! Nice to see you here. I'm Viveena, a 19 years old girl exploring
          technology while i romanticize my life by adding aesthetics and music.
        </div>
        <div className="info-container">
          <div className="img-container">
            <img src={profile} alt="" width={300} />
          </div>
          <div className="my_info-container">
            <p>Everything about me</p>
            <div className="col-container">
              <div className="col col1">
                <ul>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>
                    <div className="detail">Birthday: 30 August 2002</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">
                      Address: Vadodara, Gujarat, India
                    </div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Phone: +91 6353300284</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Degree: BE(CSE)</div>
                  </li>
                </ul>
              </div>
              <div className="col col2">
                <ul>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>
                    <div className="detail"> Age: 19</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Email: viveena30@gmail.com</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Github: @viveena30 </div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Freelance: Available</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-description">
          I am currently pursuing B.E. in
          Computer Engineering. I have worked with Web Development, Android
          Development, and Cloud Technologies. I love to convert ideas into
          code. I am a community person and love to engage in community events.
          I am an open-source enthusiast. I love to participate in organizing
          events as well as taking part in them. Currently, I am a volunteer at
          the GDSC chapter of our college. I avidly participate in events like
          HacktobberFest, and other hackathons. I always try to build something
          that is useful to this world, this community, and this society of
          ours. Always open to opportunities to upskill my knowledge. I am open
          to learning any tech stack according to requirements.
          
          
        </div>
      </div>
    </>
  );
};

export default About;
