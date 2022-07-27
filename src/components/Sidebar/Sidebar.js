import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./style.css";
import profile from "../../assets/profile.jpg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";


const Sidebar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="avatar">
          <img src={profile} alt="" />
          <div className="name">Viveena Rathi</div>
          <div className="tagline">Good things come to those who hustle.<br />💻☕😇✨</div>
        </div>




        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="#home" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#about">
              {/* <NavLink to={about}    and import all these sections/pages too       activeClassName="active-class" exact> */}
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#resume">
              Resume
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="#portfolio">
              Portfolio
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="#services">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="social-links-wrapper">
            <a href="www.google.com" className="social-link twitter">
              <img src={twitter} alt="twitter" width={16} />
            </a>
            <a href="www.google.com" className="social-link linked-in">
              <img src={linkedin} alt="linked-in" width={16} />
            </a>
            <a href="www.google.com" className="social-link instagram">
              <img src={instagram} alt="instagram" width={16} />
            </a>
            <a href="www.google.com" className="social-link github">
              <img src={github} alt="github" width={16} />
            </a>
         
            <a href="www.google.com" className="social-link mail">
              <img src={mail} alt="mail" width={16} />
            </a>
            <a href="www.google.com" className="social-link phone">
              <img src={phone} alt="phone" width={16} />
            </a>
        </div>

        
      </div>
    </>
  );
};

export default Sidebar;
