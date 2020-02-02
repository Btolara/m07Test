import React from "react";
import "./styles.css";
import "./components/InfoCard";
import Info from "./info/Info";
import InfoCard from "./components/InfoCard";
import MenuBar from "./components/MenuBar";
import RssInfo from "./components/RssInfo";
import SkillItems from "./components/SkillItems";
import ResumeItem from "./components/ResumeItem";
import PortCard from "./components/PortCard";

import Home from "./components/Home";

const Skills = [
  {
    title: "Photoshop",
    value: "80%",
    color: "#0153a2"
  },
  {
    title: "Illustrator",
    value: "80%",
    color: "#ffc908"
  },
  {
    title: "inDesign",
    value: "70%",
    color: "#c14bcc"
  },
  {
    title: "Wordpress",
    value: "50%",
    color: "#0177a2"
  },
  {
    title: "HTML",
    value: "30%",
    color: "#e79900"
  },
  {
    title: "CSS",
    value: "30%",
    color: "#0142a2"
  },
  {
    title: "Javascript",
    value: "10%",
    color: "#e7cb00"
  }
];

const App = () => {
  return (
    <div className="App">
      <section className="sideBar">
        <InfoCard infor={Info} />
        <MenuBar />
        <RssInfo />
        <p>©Copyright ©2020 All rights reserved </p>
      </section>
      <main>
        <Home />
        <ResumeItem
          className="skills"
          title="my speciality"
          subtitle="my skills"
        >
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          {Skills.map(skill => (
            <SkillItems {...skill} />
          ))}
        </ResumeItem>
        <ResumeItem title="about me" subtitle="who am i?">
          <p>
            Hi I'm Carlos Lara On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn
            around and return to its own, safe country. Even the all-powerful
            Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by
            the name of Lorem Ipsum decided to leave for the far World of
            Grammar.
          </p>
        </ResumeItem>
        <ResumeItem title="education" subtitle="what i studied?">
          <p>
            Hi I'm Carlos Lara On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn
            around and return to its own, safe country. Even the all-powerful
            Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by
            the name of Lorem Ipsum decided to leave for the far World of
            Grammar.
          </p>
        </ResumeItem>
        <ResumeItem title="my work" subtitle="this is my portfolio">
          <p>Hello world</p>
          <PortCard />
        </ResumeItem>
      </main>
    </div>
  );
};

export default App;
