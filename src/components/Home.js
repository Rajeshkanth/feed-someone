import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";
import image1 from "./images/joel-muniz-A4Ax1ApccfA-unsplash.jpeg";
import image2 from "./images/larm-rmah-AEaTUnvneik-unsplash.jpeg";

function Home() {
  return (
    <>
      <Header />
      <div className="home" id="home"></div>
      <About />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
