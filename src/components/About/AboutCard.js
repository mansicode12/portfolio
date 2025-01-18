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
            Hi Everyone, I am <span className="purple">{data?.name} </span>
            from{" "}
            <span className="purple">
              {" "}
              {data?.city}, {data?.country}.
            </span>{" "}
            I am currently employed as a{" "}
            <span className="purple">{data?.designation}</span> at{" "}
            {data?.employer}. I completed my bachelor's from the{" "}
            {data?.university} in {data?.yearGraduated}.
            <br />
            <br />
            Since then, building multiple products from scratch has given me
            hands-on experience with every phase of{" "}
            <span className="purple">Software Development Lifecycle.</span>
            <br />
            <br />
            With a deep love for vibrant colors and the intricacies of pixels, I
            focus on creating beautiful, intuitive{" "}
            <span className="purple">user experiences</span> on the frontend. At
            the same time, my passion for complex problem-solving pushes me to
            optimize and streamline backend systems, ensuring every project is
            both <span className="purple">visually stunning</span> and
            <span className="purple"> technically robust.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Artciles
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with Family
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hope for the best but stay prepared for the worst"{" "}
          </p>
          <footer className="blockquote-footer">Moiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
