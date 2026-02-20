import React from "react";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Section.css";

const Cases = () => {
  useAnimateOnScroll();
  return (
    <section id="cases" className="section pop-up">
      <h2>Case Studies</h2>
      <p>See how we’ve helped clients achieve success.</p>
    </section>
  );
};

export default Cases;
