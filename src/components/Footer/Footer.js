import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Card className="direction-row fixed-bottom" id="footer">
      <Card.Header>Created by Chad Branagan &copy;2022</Card.Header>
      <Card.Body className="d-flex">
        <Card.Body>
          <Card.Title>Visit me on LinkedIn: </Card.Title>
          <Nav.Link href="https://www.linkedin.com/in/chad-branagan">
            <Card.Title>Chad-Branagan</Card.Title>
          </Nav.Link>
        </Card.Body>
        <Card.Body>
          <Card.Title>Visit me on GitHub: </Card.Title>
          <Nav.Link href="https://github.com/CBranagan">
            <Card.Title>CBranagan</Card.Title>
          </Nav.Link>
        </Card.Body>
        <Card.Body>
          <Card.Title>Visit me on LinkedIn: </Card.Title>
          <a src="www.linkedin.com/in/chad-branagan">
            <Card.Title>CBranagan</Card.Title>
          </a>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default Footer;
