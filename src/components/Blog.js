import React from "react";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Section.css";

const Blog = () => {
  useAnimateOnScroll();
  return (
    <section id="blog" className="section pop-up">
      <h2>Insights</h2>
      <p>Latest articles and industry trends.</p>
    </section>
  );
};

export default Blog;
