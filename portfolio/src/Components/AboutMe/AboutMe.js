import React from "react";
import "./AboutMe.css";
import fastlearner from "../../img/fastlearner.png";
import committed from "../../img/committed.png";
import attention from "../../img/attention.png";
import skills from "../../img/skills.png";

const AboutMe = () => {
  const boldStyle = {
    fontWeight: "bold",
    textAlign: "center"
  };

  return (
    <section className="wrapper text-dark bg-grey">
      <div className="d-flex-c container">
        {/* tittle */}
        <div className="text-center">
          <h6 className="heading my-1 font-x2">About Me</h6>
        </div>

        <div>
          <div className="one_half extra-text">
            <ul className="mx-2">
              <li className="one_half my-1">
                <article>
                  <h6 style={boldStyle}>Fast Learner</h6>
                  <p className="nospace text-jusitfy">
                    <img src={fastlearner} alt="fast learner"></img>
                    <br />I love writing code and I am always trying to expand
                    my knowdlege with new languages. I believe it makes more
                    more efficient with my daily tasks.
                  </p>
                </article>
                <p></p>
              </li>
              <li className="one_half my-1">
                <article>
                  <h6 style={boldStyle}>Committed</h6>
                  <p className="nospace text-jusitfy">
                    <img src={committed} alt="committed"></img>
                    <br />
                    If you are looking for someone reliable to get the job done,
                    then I am the one. I always deliver on time and give it my
                    all to finish any assignment given.
                  </p>
                </article>
                <p></p>
              </li>
            </ul>
          </div>

          <div className="one_half extra-text">
            <ul className="mx-2">
              <li className="one_half">
                <article>
                  <h6 style={boldStyle}>Attention To Details</h6>
                  <p className="nospace text-jusitfy">
                    <img src={attention} alt="attention"></img> <br />
                    Understanding the mechanisms of each language is what I am
                    about. I do not like the feeling of solving a problem
                    without knowing how to do it.
                  </p>
                </article>
                <p></p>
              </li>
              <li className="one_half">
                <article>
                  <h6 style={boldStyle}>Skills</h6>
                  <p className="nospace text-jusitfy">
                    <img src={skills} alt="skills"></img> <br />
                    <ul>
                      <li>Reactjs</li>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Nodejs</li>
                      <li>Express</li>
                      <li>MySQL</li>
                    </ul>
                  </p>
                </article>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
