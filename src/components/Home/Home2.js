import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/m2-modified.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <h3><b className="purple">Hello there! I'm Muhammad Asif Jawed,</b></h3>
            Seasoned Senior Mobile Engineer | Tech Enthusiast | Knowledge Sharer
            <br />
            Welcome to my digital space, where technology meets creativity, and innovation takes center stage. With nearly 5 years of hands-on experience in the ever-evolving world of mobile app development, I am on a mission to bring ideas to life through cutting-edge solutions.
            <br />
            <br />
            <h3><b className="purple">Why Mobile Engineering?</b></h3>
            I thrive on the challenges of turning concepts into tangible, user-friendly mobile applications. Whether it's creating seamless cross-platform experiences with Flutter, diving into native Android development with Kotlin and Java, or architecting robust backend solutions with AWS, Node.js, and Laravel, I'm at home in the world of code.<br />  <br />
            <h3><b className="purple">Leading with Purpose</b></h3>
            Over the past 2 years, I've had the privilege of leading agile teams, shaping projects from inception to delivery. It's not just about overseeing development; it's about fostering collaboration, mentoring, and empowering junior developers to reach new heights.<br />  <br />
            <h3><b className="purple">A Journey of Innovation</b></h3>
            One of my proudest achievements was steering a startup from ideation to a fully functional ecosystem. As the sole senior developer, advisor, and consultant, I played a pivotal role in sculpting software architectures, making strategic decisions, and delivering exceptional user experiences.<br />  <br />
            <h3><b className="purple">Beyond the Code</b></h3>
            I believe in the power of knowledge-sharing. When I'm not immersed in lines of code, you can find me sharing insights and experiences with the tech community through my articles on Medium. I see every piece as an opportunity to contribute to the collective growth of our industry.
            <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/aasif1297"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/aasif1297"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aasif1297/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/asif_1297"
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
export default Home2;
