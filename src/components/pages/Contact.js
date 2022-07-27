import React from "react";
import Title from "../Title";
import './Contact.css'
const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <Title title={"Contact"} span={"Contact"} />
          <div className="intro-lines">
          Want to know more or have a project in mind?  Let's Connect!
          </div>
          <div class="contact-card">
                    <h3>ADDRESS</h3>
                    <p>Vadodara, Gujarat, India</p>
                    <a href="mailto:viveena30@gmail.com"><h3>EMAIL</h3></a>
                    <p><a href="mailto:viveena30@gmail.com">viveena30@gmail.com</a></p>
                    <a href="tel:6353300284"><h3>PHONE</h3></a>
                    <p><a href="tel:6353300284">+91 6353300284</a></p>
                </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
