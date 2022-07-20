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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          autem quaerat neque esse a error. Cumque ducimus a saepe sunt!
        </div>
        <div className="info-container">
          <div className="img-container">
            <img src={profile} alt="" width={300} />
          </div>
          <div className="my_info-container">
            <p>Lorem ipsum dolor sit amet</p>
            <div className="col-container">
              <div className="col col1">
                <ul>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>
                    <div className="detail">Birthday: 9 February 2002</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">
                      Address: 2231, Nayabd, Eden Icon I, Flat-1B, 1st floor
                    </div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Phone: +91 9088677074</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">
                      City: Kolkata, West Bengal, India
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col col2">
                <ul>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>
                    <div className="detail">Birthday: 9 February 2002</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">
                      Address: 2231, Nayabd, Eden Icon I, Flat-1B, 1st floor
                    </div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">Phone: +91 9088677074</div>
                  </li>
                  <li>
                    <i className="arrow">
                      <img src={rightArrow} alt="" />
                    </i>

                    <div className="detail">
                      City: Kolkata, West Bengal, India
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-description">
          I am currently practicing tailwindcss and react. Though I have already
          done few projects in bootstrap, vanilla css and Java Script. I have a
          keen interest in exploring the backend developement which I've been
          doing using tools like MongoDB, Node.js, Express Framework and thanks
          to RESTful API. Apart from these, I have successfully completed the
          Google Cloud Faciliater Program 2k20. Through this program, I learned
          about Containers with Docker, open shift, and kubernetes, Create ML
          models with BigQuery ML, Perform Foundation, Infrastructure Tasks in
          Google Cloud and Integrate with ML APIs.
        </div>
      </div>
    </>
  );
};

export default About;
