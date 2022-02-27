import React from "react";
import { Container, Card } from "react-bootstrap";
import IconList from "../components/IconList";

const AboutMe = () => {
  return (
    <Container className="d-flex vh-100">
      <Card className="bg-transparent border-0 mt-5 align-items-center">
        <Card.Img
          className="h-25 w-25"
          id="about-me-img"
          variant="top"
          src="https://res.cloudinary.com/cbranagan/image/upload/v1644378268/headshot_zfb227.jpg"
        />
        <Card.Body>
          <Card.Title
            className="mt-3 text-info bg-dark fw-bold border-0"
            id="about-me-title"
          >
            Chad Branagan
          </Card.Title>
          <Card.Text
            className="mt-3 text-dark fw-bold border-0"
            id="about-me-text"
          >
            I am a recent graduate from the University of Utahs' coding
            bootcamp. This has been an amazing experience, and am truly enjoying
            my new found passion. I am looking to grow my skill set and be a
            valuable addition to any team. I have spent the last 20+ years in
            the Food Service industry, and although I have been very succesful
            in this career, it is time for a change. I have years of experience
            with managing teams of up to 50 and perform well in high stress
            situations. Please feel free to reach out to me with any questions.
          </Card.Text>
          <IconList />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;
