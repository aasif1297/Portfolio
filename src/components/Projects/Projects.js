import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comingSoon from "../../Assets/Projects/coming_soon.png";


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
              imgPath={comingSoon}
              isBlog={false}
              title="Under Development"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis ullamcorper justo, ac molestie felis maximus non. Nam suscipit tortor convallis dui fringilla condimentum. Suspendisse eget feugiat libero. Cras at commodo ligula, porta facilisis dolor. Aliquam pulvinar dignissim odio, et iaculis eros lobortis at. Ut commodo viverra libero et maximus. Nulla arcu est, consectetur at ex a, lacinia mollis nibh. Ut tincidunt vehicula molestie. Ut id quam et nisi malesuada aliquam. Vivamus posuere venenatis ante ut efficitur. Proin vehicula mattis tellus eu auctor. Integer gravida, lectus eu luctus elementum, lacus lectus euismod ex, nec luctus libero magna id ipsum. Morbi pretium euismod egestas. Maecenas elit est, fringilla a ultrices a, porta non erat."
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
