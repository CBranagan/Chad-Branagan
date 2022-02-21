import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";

const ContactForm = () => {

  return (
    <Container>
      <Form id="contactForm">
        <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            name="firstName"
            type="text"
            placeholder="First Name"
            // defaultValue={firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Last Name"
            // defaultValue={lastName}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            // defaultValue={email}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Message"
          className="mb-3"
        >
          <Form.Control
            name="message"
            type="tel"
            placeholder="Message"
            // defaultValue={message}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
