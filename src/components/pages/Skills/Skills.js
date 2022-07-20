import React from "react";
import Title from "../../Title";
import "./Skillstyle.css";

const Skills = () => {
  return (
    <>
      <div id="skills"></div>
      <div className="skills">
        <Title title={"Skills"} span={"Skills"} />
        <div className="intro-lines">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          autem quaerat neque esse a error. Cumque ducimus a saepe sunt!
        </div>

        <div className="skill-container">
          <div  className="skill-card">
            <h2  className="skill-title">UI/UX Designing</h2>

            <div  className="skill">
              <div  className="skill-name">Figma</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="85"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">Adobe XD</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="70"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">Canva</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="90"></div>
              </div>
            </div>
          </div>
          <div  className="skill-card">
            <h2  className="skill-title">Frontend development</h2>

            <div  className="skill">
              <div  className="skill-name">HTML</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="95"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">CSS</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="90"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">SASS</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="80"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">Javascript</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="80"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">jQuery</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="80"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">React JS</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="70"></div>
              </div>
            </div>
          </div>

          <div  className="skill-card">
            <h2  className="skill-title">backend development</h2>

            <div  className="skill">
              <div  className="skill-name">PHP</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="50"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">Node.js</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="70"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">mongoDB</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="55"></div>
              </div>
            </div>
          </div>
          <div  className="skill-card">
            <h2  className="skill-title">Programming</h2>

            <div  className="skill">
              <div  className="skill-name">C Programming</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="85"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">C++</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="70"></div>
              </div>
            </div>
          </div>
          <div  className="skill-card">
            <h2  className="skill-title">Others</h2>

            <div  className="skill">
              <div  className="skill-name">Content Writing</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="80"></div>
              </div>
            </div>
            <div  className="skill">
              <div  className="skill-name">Graphic Design</div>
              <div  className="skill-bar">
                <div  className="skill-per" per="70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
