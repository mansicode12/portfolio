import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { data } from "../../utils/data";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{data?.name}</span> from{" "}
            <span className="purple">{data?.city}, {data?.country}</span>.
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Computer Science</span> with a specialization in{" "}
            <span className="purple">Data Science</span> at{" "}
            <span className="purple">DIT University</span>.
            <br />
            <br />
            I enjoy building full-stack applications that integrate AI/ML, and I've worked on real-world projects like{" "}
            <span className="purple">TruthScan</span> (misinformation detector),{" "}
            <span className="purple">HireMe</span> (resume analyzer), and{" "}
            <span className="purple">FarmGuard</span> (AI crop doctor).
            <br />
            <br />
            My passion lies in blending intuitive UI/UX with smart backend logic. I focus on crafting{" "}
            <span className="purple">beautiful, responsive designs</span> and integrating{" "}
            <span className="purple">AI-driven features</span> using tools like Flask, OpenAI, and SQLite.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading tech blogs & watching dev vlogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with family & nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tools and frameworks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning. Keep building. Keep growing."{" "}
          </p>
          <footer className="blockquote-footer">Mansi Bisht</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
