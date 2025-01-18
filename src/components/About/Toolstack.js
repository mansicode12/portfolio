import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiTrello,
  SiJira,
  SiAtlassian,
  SiOpenai,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  const tools = [
    "Visual Studio Code",
    "Postman",
    "Slack",
    "Vercel",
    "Trello",
    "Jira",
    "Git",
    "Atlassian",
    "ChatGPT",
  ];

  const toolIcons = {
    "Visual Studio Code": SiVisualstudiocode,
    Postman: SiPostman,
    Slack: SiSlack,
    Vercel: SiVercel,
    Trello: SiTrello,
    Jira: SiJira,
    Git: DiGit,
    Atlassian: SiAtlassian,
    ChatGPT: SiOpenai,
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => {
        const IconComponent = toolIcons[tool];
        return IconComponent ? (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <IconComponent />
            <p style={{ fontSize: "15px", marginTop: "10px" }}>{tool}</p>
          </Col>
        ) : null;
      })}
    </Row>
  );
}

export default Toolstack;
