import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import icons from "../../utils/fontIcons";

const IconList = () => {
  return (
    <>
      <Card.Header className=" bg-dark fw-bold text-info">
        Current Languages and skills
      </Card.Header>
      <ListGroup className="gap-2 mt-2">
        {icons.map((icon) => (
          <li key={icon.id} className={icon.class}></li>
        ))}
      </ListGroup>
    </>
  );
};

export default IconList;
