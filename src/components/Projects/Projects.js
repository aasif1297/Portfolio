import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mygharCustomer from "../../Assets/Projects/myghar_customer.png";
import eqClient from "../../Assets/Projects/eq_client.png";
import myghar_manager from "../../Assets/Projects/myghar_manager.png";
import designhome from "../../Assets/Projects/designhome.png";
import beeper from "../../Assets/Projects/beeper.png";
import agxpe from "../../Assets/Projects/agxpe.png";


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
              imgPath={mygharCustomer}
              isBlog={false}
              title="MyGhar Customer"
              description="Hassle Free Living All inclusive living spaces designed for young professionals & travelers."
              // ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.mygharliving.my_ghar_customer"
            />
          </Col>
          
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={myghar_manager}
              isBlog={false}
              title="MyGhar Manager"
              description="MyGhar Manager App allows managers to easily manage things without hassle."
              demoLink="https://play.google.com/store/apps/details?id=com.flutter.manager_app&hl=en-US"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={eqClient}
              isBlog={false}
              title="Equigate Customer App"
              description="The all-in-one app for equine professionals. Equigate is an all-in-one app for all equine professionals. With effortless bookings, secure payments, direct messaging, instant and dependable reports plus many other features. Equigate provides reliability, structure and efficiency allowing you to focus on what you do best."
              // ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.equigate.client"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={designhome}
              isBlog={false}
              title="DesignHomes AI"
              description="AI-Powered Designs: Let AI generate personalized designs based on your style preferences, room size, and furniture choices. Just input your ideas, and watch as stunning designs unfold before your eyes."
              demoLink="https://apps.apple.com/us/app/design-homes-ai/id6642678450"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={beeper}
              isBlog={false}
              title="Beeper Medical"
              description="Your Home: The New Health HubBeeperMD turns the phrase Home is where the heart is into Home is where the health is. We believe in the power of a comfortable and familiar environment when it comes to your health. Why venture out to a medical facility when you can receive primary and urgent care services in your own living room? Whether it's routine check-ups, health screenings, or immediate attention for urgent health concerns, BeeperMD is at your service 24/7, 365 days a year."
              // ghLink=""
              demoLink="https://apps.apple.com/in/app/beepermd-health/id6446930849"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={agxpe}
              isBlog={false}
              title="AGXPE Conference"
              description="Association for GxP Excellence is an organization comprised of quality, compliance and training professionals throughout the world. Association for GxP Excellence is an organization comprised of quality, compliance and training professionals throughout the world. We are a U.S Federally recognized 501 (C) 3, not-for-profit. Our membership is free and open to all who wish to join."
              // ghLink=""
              demoLink="https://apps.apple.com/us/app/agxpe-conference-2022/id1440044607"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
