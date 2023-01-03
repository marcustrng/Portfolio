import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marcus Tự Trương </span>
            from <span className="purple"> Ho Chi Minh city, Vietnam</span>
            <br />I am a <span className="purple">senior software engineer</span> in<span className="purple"> FPT Software Ltd.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Knowing is not enough, we must apply."{" "}
          </p>
          <footer className="blockquote-footer">Leonardo da Vinci</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
