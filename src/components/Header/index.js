import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="xxl" bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Chad Branagan</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="#action2">Contact Me</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
