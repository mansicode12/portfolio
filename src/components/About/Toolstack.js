import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVite, SiVisualstudiocode, SiGithub, SiOpenai, SiFastapi, SiSqlite } from "react-icons/si";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: SiVisualstudiocode },
    { name: "GitHub", icon: SiGithub },
    { name: "Vite", icon: SiVite },
    { name: "OpenRouter API", icon: SiOpenai },
    { name: "FastAPI", icon: SiFastapi },
    { name: "SQLite", icon: SiSqlite },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <tool.icon />
          <p style={{ fontSize: "15px", marginTop: "10px" }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
