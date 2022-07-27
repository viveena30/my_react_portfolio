import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              {/* <MdFingerprint className='navbar-icon' /> */}
              Viveena
            </Link>
          </div>
          <small className="website-rights">
            Copyrights © 2022 - All rights reserved by Viveena
          </small>
          <div className="social-icons">
            <p class="footer-heart">
            <a href="https://armin.id">
              Made with{" "}
              <g-emoji
                class="g-emoji"
                alias="heart"
                fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
              >
                <img
                  class="emoji"
                  alt="heart"
                  height="20"
                  width="20"
                  src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
                />
              </g-emoji>{" "}
             </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
