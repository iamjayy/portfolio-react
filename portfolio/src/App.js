import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
