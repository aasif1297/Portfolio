import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asif Jawed </span>
            from <span className="purple"> Freiburg, Germany.</span>
            <br />
            currently rocking it as a Software Lead at goodBot. Beyond the code, I'm an adrenaline junkie hooked on:
          </p>
          <ul>
            <li className="about-activity">
            🪂 Indoor Skydiving
            </li>
            <li className="about-activity">
            🚣‍♂️ Kayaking
            </li>
            <li className="about-activity">
            🏞 Canyoning
            </li>
            <li className="about-activity">
            🏎️ Go Karting
            </li>
            <li className="about-activity">
            🎿 Skiing
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
          Activites that I want to try in future are:
          </p>
          <ul> <li className="about-activity">
          🤿 Scuba Diving
          </li>
          <li className="about-activity">
          ✈️ Skydiving
          </li>
          <li className="about-activity">
          🌆 Conquering the world's tallest building
          </li>
          </ul>
          <br /><br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "The only limit to your success is you.!"{" "}
          </p>
          <footer className="blockquote-footer">Asif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
