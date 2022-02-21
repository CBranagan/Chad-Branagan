import React from "react";
import { Container, Button, Card, Image, ListGroup } from "react-bootstrap";
import css from "../../main.css";

const Main = () => {
  return (
    <Container id="card-" fluid>
      <Card id="about-me-card" style={{ width: "100%" }}>
        {/* <Card.Img
          id="about-me-img"
          variant="top"
          src="https://res.cloudinary.com/cbranagan/image/upload/v1644378268/headshot_zfb227.jpg"
        /> */}
        <Card.Body id="about-me-body">
          <Card.Title id="about-me-title">Who is Chad Branagan?</Card.Title>
          <Card.Text id="about-me-text">
            Hi my name is Chad Branagan. I am a recent graduate from the
            University of Utahs' coding bootcamp. This has been an amazing
            experience, and am truly enjoying my new found passion. I am looking
            to grow my skill set and be a valuable addition to any team. I have
            spent the last 20+ years in the Food Service industry, and although
            I have been very succesful in this career, it is time for a change.
            I have years of experience with managing teams of up to 50 and
            perform well in high stress situations. Please feel free to reach
            out to me with any questions.
          </Card.Text>
        </Card.Body>
        <Card.Body id="about-me-body">
          <Card.Title id="about-me-title">Languages</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;
