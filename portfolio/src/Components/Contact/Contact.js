import React from "react";
import "./Contact.css";
// import portfolio from "../../img/portfolio-1.jpg";

const Contact = () => {
  return (
    <section className="wrapper parrallax-2">
      <article className="d-flex-c container text-center">
        <h6 className="heading font-x2 contactMe">Contact Me</h6>

        <div className="my-2">
          <p>lorum ipsu, lorumsdfkjbsdfksjbdf</p>
        </div>
        <div className="d-flex-r">
          <p>
            <button className="btn inverse break">EMAIL</button>
          </p>

          <p>
            <button className="btn inverse break">LINKEDIN</button>
          </p>

          <p>
            <button className="btn inverse break">GITHUB</button>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Contact;
