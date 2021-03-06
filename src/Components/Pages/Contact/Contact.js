import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import image from '../../../Images/foot6.jpg'
import './Contact.css';

const Contact = () => {
    return (
        <>
        <Container className="contact-container">
        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        <div>
        <img style={{ height: "400px" }} src={image} alt="" />
        </div>
        </Row>
        </Container>
        </>
    );
};

export default Contact;