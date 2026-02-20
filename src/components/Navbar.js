import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home","about","services","cases","blog","contact"];
      const scrollPos = window.scrollY + 100;
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const offset = 70; // adjust for navbar height
    const top = target.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false); // close mobile menu after click
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">SoftCo</div>
        <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {["home","about","services","cases","blog","contact"].map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active" : ""}
                onClick={(e) => smoothScroll(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
