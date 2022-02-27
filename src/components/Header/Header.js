import React from "react";
import { Navbar, Nav, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="justify-content-between flex-wrap"
    >
      <Navbar.Brand className="fw-bold p-3" href="/aboutme">
        Chad Branagan
      </Navbar.Brand>
      <Nav variant="pills" defaultActiveKey="/aboutme" className="flex-wrap">
        <Nav.Item>
          <Nav.Link href="/aboutme">
            <Card.Title className="text-light">About Me</Card.Title>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"portfolio"}>
            <Link to="/portfolio">
              <Card.Title className="text-light">Portfolio</Card.Title>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"resume"}>
            <Link to="/resume">
              <Card.Title className="text-light">Resume</Card.Title>
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"contact"}>
            <Link to="/contact">
              <Card.Title className="text-light">Contact</Card.Title>
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
