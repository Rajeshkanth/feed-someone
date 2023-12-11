import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="float">
        <h1>Feed Someone</h1>
      </div>
      <div className="about-right">
        {" "}
        <h1>About us </h1>{" "}
        <p>
          {" "}
          Our Mission At Feed Someone, we believe that no one should go to bed
          hungry. Our mission is to eradicate hunger by providing nutritious
          meals and empowering communities.{" "}
        </p>
        <h3>Future Goals & Vision </h3>{" "}
        <p>
          Our vision extends beyond providing meals. We aim to empower
          communities through education, sustainable farming initiatives, and
          long-term solutions to break the cycle of hunger. Get Involved Join
          our movement! Whether through donations, volunteering, or spreading
          awareness, every action counts. Together, we can make hunger a thing
          of the past.
        </p>
      </div>
    </div>
  );
}

export default About;
