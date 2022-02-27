import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import IconList from "../components/IconList";

const Resume = () => {
  return (
    <Container className="vh-100">
      <Card className="bg-transparent border-0">
        <Button className="mt-3 bg-info text-black fw-bold border-0">
          <a
            href="https://docs.google.com/document/d/1AlsJHfC3MCY1fxlCpMpQ1Ve6v63w_wkicG6ijfH51I8/edit?usp=sharing"
            download
          >
            My Resume
          </a>
        </Button>
        <IconList />
      </Card>
    </Container>
  );
};

export default Resume;
