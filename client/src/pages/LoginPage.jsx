import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <Row className="w-100">
            <Col md={6} lg={4} className="mx-auto">
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Login</h2>
                  <Form>
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                    <Form.Group id="password" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" required />
                    </Form.Group>
                    <Button className="w-100 mt-4" type="submit">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
