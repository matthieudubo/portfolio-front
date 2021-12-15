import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="#home">
          <div className="logo-md" />
        </a>
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu-about">
          <a href="#about">About Me</a>
        </div>
        <div className="navbar__menu-projects">
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar__menu-contact">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="navbar__networks">
        <a
          href="https://www.linkedin.com/in/matthieu-dubo-a14223221/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="linkedin" />
        </a>
        <a
          href="https://github.com/matthieudubo"
          target="_blank"
          rel="noreferrer"
        >
          <div className="github" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
