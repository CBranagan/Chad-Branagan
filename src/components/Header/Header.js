import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Chad Branagan</Navbar.Brand>
        <Nav>
          <Link to="/aboutme">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact Me</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
