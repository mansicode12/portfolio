import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiNodejs, DiJava } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiR,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function Techstack() {
  const technologies = [
    "C",
    "Java",
    "Python",
    "R",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Flask",
    "MongoDB",
    "MySQL",
    "Git",
    "Pandas",
    "NumPy",
  ];

  const techIcons = {
    C: () => <span style={{ fontSize: "2em" }}>C</span>,
    Java: DiJava,
    Python: DiPython,
    R: SiR,
    HTML: SiHtml5,
    CSS: SiCss3,
    "Tailwind CSS": SiTailwindcss,
    JavaScript: DiJavascript1,
    React: DiReact,
    "Node.js": DiNodejs,
    Flask: SiFlask,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Git: FaGitAlt,
    Pandas: SiPandas,
    NumPy: SiNumpy,
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => {
        const IconComponent = techIcons[tech];
        return IconComponent ? (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <IconComponent />
            <p style={{ fontSize: "15px", marginTop: "10px" }}>{tech}</p>
          </Col>
        ) : null;
      })}
    </Row>
  );
}

export default Techstack;
