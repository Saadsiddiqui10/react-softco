import React from "react";
import { motion } from "framer-motion";
import "../styles/Section.css";

const About = () => (
  <section id="about" className="section">
    <h2>Why Choose Us</h2>
    <div className="cards">
      <motion.div className="card" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        ⚡ Fast
      </motion.div>
      <motion.div className="card" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        🔒 Secure
      </motion.div>
      <motion.div className="card" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        🌍 Scalable
      </motion.div>
    </div>
  </section>
);

export default About;
