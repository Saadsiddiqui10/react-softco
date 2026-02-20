import React from "react";
import "../styles/Section.css";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

const Contact = () => {
  useAnimateOnScroll();
  return (
    <section id="contact" className="section pop-up">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>📞 Phone: +92 300 1234567</p>
        <p>✉️ Email: info@softco.com</p>
      </div>
    </section>
  );
};

export default Contact;
