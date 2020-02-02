import React from "react";

const menubar = () => {
  return (
    <div>
      <nav
        className="menuNav"
        style={{
          lineHeight: "3.5"
        }}
      >
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Services">Services</a>
          </li>
          <li>
            <a href="Skills">Skills</a>
          </li>
          <li>
            <a href="Education">Education</a>
          </li>
          <li>
            <a href="Experience">Experience</a>
          </li>
          <li>
            <a href="Work">Work</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default menubar;
