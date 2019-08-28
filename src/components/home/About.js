import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <h1>This App was built using the "PERN" Stack </h1>
      <p>
        Create your account today to have access to your personalized "To Be
        Read" list !
      </p>

      <Link to="/signup">
        <button type="button">Sign up!</button>
      </Link>
    </section>
  );
};

export default About;
