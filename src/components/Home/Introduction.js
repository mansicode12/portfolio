import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/Mansi.jpg"
import { data } from "../../utils/data";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             MY  <span className="purple">JOURNEY </span> 
            </h1>
            <p className="home-about-body">
              My name is <span className="purple">Mansi Bisht.</span> I am a
              passionate <span className="purple">B.Tech CSE (Data Science)</span> student from DIT University.
              <br />
              <br />
              I enjoy building impactful{" "}
              <span className="purple">full-stack projects</span> using tools
              like <span className="purple">React</span>,{" "}
              <span className="purple">Flask</span>,{" "}
              <span className="purple">SQLite</span>, and{" "}
              <span className="purple">OpenRouter API</span>.
              <br />
              <br />
              I have developed innovative applications such as{" "}
              <span className="purple">TruthScan</span> and{" "}
              <span className="purple">HireMe</span> that showcase my skills in
              building intelligent systems for fact-checking and resume analysis.
              <br />
              <br />
              I love working on modern{" "}
              <i>
                <b className="purple">web technologies</b>
              </i>{" "}
              and strive to continuously improve my abilities in{" "}
              <span className="purple">React.js</span>,{" "}
              <span className="purple">Tailwind CSS</span>, and{" "}
              <span className="purple">FastAPI</span>.
              <br />
              <br />
              I'm always excited to take on new challenges and contribute to
              meaningful tech solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
           <Tilt>
        <div
  style={{
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #915eff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    margin: "0 auto",
     marginLeft: "-50px", 
  }}
>
  <img
    src={myImg}
    alt="Mansi Bisht"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

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
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={data?.socials?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`mailto:${data?.socials?.gmail}`}
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`https://wa.me/${data?.socials?.whatsapp?.replace("+", "")}`}
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
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
