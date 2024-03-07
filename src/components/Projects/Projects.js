import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mygharCustomer from "../../Assets/Projects/myghar_customer.png";
import eqClient from "../../Assets/Projects/eq_client.png";


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
              title="MyGhar Customer App"
              description="Hassle Free Living All inclusive living spaces designed for young professionals & travelers."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.mygharliving.my_ghar_customer"
            />
            <ProjectCard
              imgPath={eqClient}
              isBlog={false}
              title="Equigate Customer App"
              description="The all-in-one app for equine professionals.

              Equigate is an all-in-one app for all equine professionals. With effortless bookings, secure payments, direct messaging, instant and dependable reports plus many other features. Equigate provides reliability, structure and efficiency allowing you to focus on what you do best.
              
              There are profiles for everyone with tailored areas specific to your profession:
              
              •Equine and canine body workers and therapists
              •Farriers
              •Dentists
              •Saddle fitters
              
              The future of your business, in your pocket
              
              Saving you and your clients time, Equigate takes care of all administrative angles, allowing you to focus on the practice you know and love.
              Less time on admin, so you can spend more time doing what you’re great at
              
              
              Records, communication, payments. Everything lives inside the app
              
              The all-in-one nature of Equigate allows you to maintain complete control of your schedule.
              Centralising your messaging and appointment system, simple record management, and visible in app payment management."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.equigate.client"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
