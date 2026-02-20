import React from "react";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Section.css";

const Services = () => {
  useAnimateOnScroll();
  return (
    <section id="services" className="section pop-up">
      <h2>Our Services</h2>
      <div className="cards">
        <div className="card">Custom Software</div>
        <div className="card">Cloud Solutions</div>
        <div className="card">AI Integration</div>
      </div>
    </section>
  );
};

export default Services;
