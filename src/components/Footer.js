import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="https://github.com/aasif1297"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aasif1297/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@aasif1297"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsMedium />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
