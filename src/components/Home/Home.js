import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import { data } from "../../utils/data";
import Particle from "../Particle";
import Introduction from "./Introduction";
import Type from "./Type";

function Home() {
  // Inline styles
  const sectionStyle = {
    backgroundColor: "#0B0F29",
    color: "white",
    minHeight: "100vh",
    paddingTop: "50px",
    paddingBottom: "50px",
  };

  const headingStyle = {
    paddingBottom: "15px",
  };

  const typeStyle = {
    padding: "20px 50px",
    textAlign: "left",
  };

  const imageStyle = {
    maxHeight: "450px",
    borderRadius: "12px",
    backgroundColor: "#0B0F29",
    display: "block",
    margin: "auto",
  };

  return (
    <section>
      <Container fluid style={sectionStyle} id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={headingStyle} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

             <h1 className="heading-name" style={{ fontSize: "2.2rem", fontWeight: 500 }}>
  I'm
  <span
    style={{
      background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "800",
      fontSize: "4rem", // Bigger than surrounding text
      fontFamily: "'Poppins', sans-serif",
      marginLeft: "12px",
      display: "inline-block",
    }}
  >
    {data?.name}
  </span>
</h1>



              <div style={typeStyle}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={imageStyle}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Introduction />
    </section>
  );
}

export default Home;
