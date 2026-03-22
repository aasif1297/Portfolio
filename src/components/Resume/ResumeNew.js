import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AsifResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const ResumeNew = () => {
  const iframeSrc = `${pdf}#toolbar=1&navpanes=0&scrollbar=1`;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" rel="noreferrer" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />&nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume" style={{ minHeight: "80vh" }}>
        <Col md={10} className="d-flex justify-content-center">
          <iframe
            title="Muhammad Asif Jawed Resume"
            src={iframeSrc}
            width="100%"
            style={{
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              minHeight: "80vh",
              height: "80vh",
              backgroundColor: "#fff",
            }}
            loading="lazy"
            allow="fullscreen"
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" rel="noreferrer" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />&nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
};

export default ResumeNew;
