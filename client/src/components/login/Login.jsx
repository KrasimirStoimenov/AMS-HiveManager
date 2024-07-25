import React from 'react';
import { Container, Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap';

export default function Login() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={4} lg={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title as={'h2'} className="text-center mb-5 mt-2">Login</Card.Title>
                            <Form>
                                <Form.Group controlId="formBasicEmail" className="mb-4">
                                    <FloatingLabel controlId="floatingEmailAddress" label="Email address">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-4">
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 p-2">Login</Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <small>Don't have an account? <a href="/register">Sign Up</a></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
