import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import truthscan from "../../Assets/Projects/truthscan.jpg";
import hireme from "../../Assets/Projects/hireme.jpg";
import farmguard from "../../Assets/Projects/farmguard.png";
import tripplanner from "../../Assets/Projects/tripplanner.png";
import portfolio from "../../Assets/Projects/portfolio.jpg"; 
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some meaningful projects I've built showcasing full‑stack
          skills and AI integrations.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* TruthScan Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={truthscan}
              isBlog={false}
              title="TruthScan"
              description="AI‑powered misinformation detector: verifies text claims, spots deepfakes, and checks source credibility. Full-stack with user auth, Flask backend, React frontend, SQLite DB, and PDF report export."
              ghLink="https://github.com/mansicode12/truthscan-frontend"
            />
          </Col>

          {/* HireMe Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hireme}
              isBlog={false}
              title="HireMe"
              description="Smart resume & JD analyzer with AI: calculates match score, highlights key strengths/weaknesses, and generates personalized cover letters. Built with React, Flask, SQLite & OpenAI API."
              ghLink="https://github.com/mansicode12/hireme"
            />
          </Col>

          {/* FarmGuard Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmguard}
              isBlog={false}
              title="FarmGuard"
              description="AI Crop Doctor: detects plant diseases from images using ML, advises on remedies, provides weather data and an AI chatbot. Built with Flask backend, TensorFlow model & responsive UI with Tailwind CSS."
              ghLink="https://github.com/mansicode12/FarmGuard-AI-Crop-Doctor"
            />
          </Col>

          {/* AI Trip Planner */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripplanner}
              isBlog={false}
              title="AI Trip Planner"
              description="AI-powered travel assistant that generates optimized travel plans using OpenAI. Users enter destinations, duration, and preferences to receive daily itineraries. Built with Flask, React & OpenAI API."
              ghLink="https://github.com/mansicode12/ai-trip-planner"
            />
          </Col>

          {/* Portfolio Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Personal portfolio site built with React, Tailwind CSS, and Framer Motion to showcase projects, skills, and resume in a professional and responsive design."
              ghLink="https://github.com/mansicode12/portfolio"
              demoLink="https://dapper-swan-2c9945.netlify.app/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
