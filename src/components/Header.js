import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const donatePage = () => {
    navigate("/qrpage");
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="header">
        <h1>Feed Someone</h1>
        <nav>
          <Link className="nav" onClick={() => scrollToSection("home")}>
            Home
          </Link>
          <Link className="nav" onClick={() => scrollToSection("about")}>
            About
          </Link>
          <Link className="nav" onClick={() => scrollToSection("blog")}>
            Blog
          </Link>
          <Link className="nav" onClick={() => scrollToSection("contact")}>
            Contact
          </Link>
          <a className="button-48" onClick={donatePage}>
            <span className="text"> Donate</span>{" "}
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
