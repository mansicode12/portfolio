import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import leaf from "../../Assets/Projects/leaf.png";
import enroll from "../../Assets/Projects/enrolledAi.png";
import indow from "../../Assets/Projects/indowwindows.svg";
import authjs from "../../Assets/Projects/authjs.png";
import bloodwallet from "../../Assets/Projects/bloodwallet.png";
import tradingfeed from "../../Assets/Projects/tradingfeed.svg";
import chromeextension from "../../Assets/Projects/chrome-extension.jpeg";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="VinSavvy"
              description="An automotive industry product that scrapes data from multiple car dealerships to provide processed insights for dealership sales personnel. Features include price comparison, inventory tracking, sales analytics, and a Chrome extension for real-time data integration. Developed dashboards for admins and dealership groups for effective management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enroll}
              isBlog={false}
              title="Enrolled AI"
              description="A healthcare system utilizing Medplum and strict adherence to FHIR standards. Integrated AI models analyze MRI, X-Ray, and other scans to provide detailed insights to patients. Developed user-friendly dashboards for patients and healthcare administrators, ensuring secure and efficient management of sensitive health data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indow}
              isBlog={false}
              title="Indow Windows"
              description="A home improvement product sales platform focused on window insulation solutions. Developed multiple frontend pages and integrated a payment gateway using Stripe. Built a secure authentication system and implemented sales strategies to improve customer engagement and streamline transactions."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradingfeed}
              isBlog={false}
              title="Trading Feed"
              description="An e-commerce platform that allows users worldwide to list items they need in bulk. The system monitors product availability globally, notifies users via email or in-app notifications when their desired items are listed, and facilitates streamlined communication between buyers and sellers."
              ghLink="https://github.com/Mr-Moeez/supplyseek"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authjs}
              isBlog={false}
              title="SvelteKit Authentication with Supabase"
              description="Implemented authentication for a SvelteKit application using Supabase, enabling secure user sign-up, login, and session management. The project integrates Supabase's real-time database features and leverages SvelteKit's server-side rendering capabilities to deliver a seamless and efficient user experience."
              ghLink="https://github.com/Mr-Moeez/SvelteKit-Supabase-Auth"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodwallet}
              isBlog={false}
              title="Blood Wallet"
              description="A life-saving platform designed to connect blood donors with those in urgent need. Users can request blood, search for donors in their area, or register to donate blood. Features include location-based donor matching, a secure user database, and real-time notifications to ensure timely assistance."
              ghLink="https://github.com/Mr-Moeez/Blood-wallet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chromeextension}
              isBlog={false}
              title="React Component Chrome Extension Template"
              description="A boilerplate project to simplify building Chrome extensions using React. Includes a setup for content scripts and component-based architecture, enabling developers to quickly create and deploy feature-rich extensions. Designed for ease of customization and rapid development."
              ghLink="https://github.com/Mr-Moeez/React-component-content-script-extension-template"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
