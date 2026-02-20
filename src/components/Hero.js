import React from "react";
import "../styles/Section.css";

const Hero = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector("#services");
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <h1 className="fade-in">Innovative Software Solutions</h1>
      <p className="fade-in">Empowering businesses with technology</p>
      <a href="#services" onClick={handleScroll} className="cta fade-in">
        Get Started
      </a>
    </section>
  );
};

export default Hero;
