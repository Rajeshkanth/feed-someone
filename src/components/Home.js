import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";

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
