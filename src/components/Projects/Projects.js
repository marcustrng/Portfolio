import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import bestPractice from "../../Assets/Projects/best-practice.png";

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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Personal Portfolio build with react.js, Material-UI."
              ghLink="https://github.com/marcustrng/portfolio"
              demoLink="https://tutqq.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bestPractice}
              isBlog={false}
              title="Best Practices"
              description="My personal best practices project build with Java, SpringBoot, Redis, Keycloak, MySQL, MongoDB, and ReactJS."
              ghLink="https://github.com/marcustrng/best-practice"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
