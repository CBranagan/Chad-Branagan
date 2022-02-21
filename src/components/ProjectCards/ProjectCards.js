import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import projects from "../../utils/projects";

const ProjectCards = () => {
  return (
    <Container id="projectCardContainer" className="d-flex flex-wrap justify-content-between gap-5">
      {projects.map((project) => (
        <Card id="projectCard">
          <Card.Header key={project.id}>{project.projectTitle}</Card.Header>
          <Container className="bg-transparent" id="projectImgContainer">
            <a href={project.projectLink}>
              <Card.Img
                id="projectImage"
                className="img-fluid"
                src={project.projectImage}
              ></Card.Img>
            </a>
         </Container>
          <Button id="repoBtn" href={project.projectRepo}>
            Git Hub Repo
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default ProjectCards;
