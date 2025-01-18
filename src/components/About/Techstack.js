import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiNodejs } from "react-icons/di";
import {
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiSvelte,
  SiAmazonaws,
  SiNextdotjs,
  SiMongodb,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function Techstack() {
  const technologies = [
    "Python",
    "Javascript",
    "React",
    "Django",
    "Flask",
    "Postgres",
    "Sveltekit",
    "Aws",
    "Docker",
    "Next JS",
    "Node",
    "Mongo",
    "Jest",
    "Cypress",
  ];

  const techIcons = {
    Python: DiPython,
    Javascript: DiJavascript1,
    React: DiReact,
    Django: SiDjango,
    Flask: SiFlask,
    Postgres: SiPostgresql,
    Sveltekit: SiSvelte,
    Aws: SiAmazonaws,
    Docker: FaDocker,
    "Next JS": SiNextdotjs,
    Node: DiNodejs,
    Mongo: SiMongodb,
    Jest: SiJest,
    Cypress: SiCypress,
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
