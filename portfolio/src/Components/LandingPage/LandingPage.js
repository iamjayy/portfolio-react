import React from "react";
import { Banner } from "../Banner/Banner";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    var user = {
      name: "Jason Nguyen",
      title: "Web Developer // Designer"
    };

    return (
      <div>
        <section className="wrapper parallax-1">
          <div className="overlay">
            <header className="d-flex-r clear justify-content-space-between"></header>
            <Banner
              name={"Jason Nguyen"}
              title={"Web Developer // Designer"}
              user={user}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
