import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import projects from "../../utils/projects";

const ProjectCards = () => {
  return (
    <Container className=" d-flex mt-5 w-100 gap-5 justify-content-between flex-row flex-wrap custom-class">
      {projects.map((project) => (
        <Card className="bg-dark w-25" id="projectCard">
          <Card.Header className="fw-bold text-info border-0" key={project.id}>
            {project.projectTitle}
          </Card.Header>

          <a href={project.projectLink}>
            <Card.Img
              id="projectImage"
              className="img-fluid"
              src={project.projectImage}
            ></Card.Img>
          </a>

          <Button
            className="mt-3 bg-info text-black fw-bold border-0"
            id="repoBtn"
            href={project.projectRepo}
          >
            Git Hub Repo
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default ProjectCards;
