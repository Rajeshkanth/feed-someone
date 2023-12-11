import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";
import image1 from "./images/larm-rmah-AEaTUnvneik-unsplash.jpeg";

function Home() {
  return (
    <>
      <Header />
      <div className="home" id="home">
        <h1 className="outlined-text">FEED SOMEONE</h1>
      </div>
      <About />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
