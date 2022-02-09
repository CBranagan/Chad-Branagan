import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Main from "../Main/";

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
                <Nav.Link href="#action1">About Me</Nav.Link>
                <Nav.Link href="#action2">Portfolio</Nav.Link>
                <Nav.Link href="#action2">Resume</Nav.Link>
                <Nav.Link href="#action2">Contact Me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Main />
    </>
  );
};

export default Header;
