import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
//import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      {/* <header>
        <Navigation />
      </header> */}
      <LandingPage />
      <Projects />
      <Contact />
      <AboutMe />
    </div>
  );
}

export default App;
