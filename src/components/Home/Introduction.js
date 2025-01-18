import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/my-image-2.png";
import { data } from "../../utils/data";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is <span className="purple"> {data?.name}. </span>I am a
              seasoned{" "}
              <span className="purple">Full Stack Software Engineer</span> with
              over 3 years of experience. I have honed my skills by working on
              both <span className="purple">Monolithic</span> and{" "}
              <span className="purple">Microservices Architectures</span>,
              delivering efficient and scalable solutions.
              <br />
              <br />I have collaborated with{" "}
              <span className="purple">startups</span> and{" "}
              <span className="purple">corporates</span>, contributing to the
              development of <span className="purple">services</span> and{" "}
              <span className="purple">products</span> in diverse industries
              such as <span className="purple">Healthcare</span>,{" "}
              <span className="purple">FinTech</span>, and{" "}
              <span className="purple">E-Commerce</span>.
              <br />
              <br />
              My passion lies in building innovative{" "}
              <i>
                <b className="purple">Web Technologies</b>
              </i>{" "}
              and crafting seamless digital experiences. Whenever possible, I
              strive to apply my expertise in{" "}
              <span className="purple">Djnago</span> and{" "}
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>{" "}
              like <span className="purple">React.js</span> and{" "}
              <span className="purple">Next.js</span> to create impactful
              solutions.
              <br />
              <br />
              With a deep appreciation for clean code and robust architecture, I
              am driven to deliver exceptional results and continuously enhance
              my craft.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{
                  filter: "drop-shadow(-1px 0px 20px var(--imp-text-color))",
                }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={data?.socials?.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={data?.socials?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={data?.socials?.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
