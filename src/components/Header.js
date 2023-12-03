import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

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
          <Link onClick={() => scrollToSection("home")}>Home</Link>
          <Link onClick={() => scrollToSection("about")}>About</Link>
          <Link onClick={() => scrollToSection("blog")}>Blog</Link>
          <Link onClick={() => scrollToSection("contact")}>Contact</Link>
          <a className="button-48" onClick={donatePage}>
            <span className="text"> Donate</span>{" "}
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
