import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

export default function HiveDetails() {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h5">Hive Details</Card.Header>
                        <Card.Body>
                            <Card.Title>Hive №5</Card.Title>
                            <Card.Text>
                                <strong>Location:</strong> location
                            </Card.Text>
                            <Card.Text>
                                <strong>Status:</strong> status
                            </Card.Text>
                            <Card.Text>
                                <strong>Honey Production:</strong> honeyProduction kg
                            </Card.Text>
                            <ListGroup className="my-4">
                                <ListGroup.Item>
                                    <strong>Last Inspection:</strong> lastInspectionDate
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Health Status:</strong> healthStatus
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Queen Status:</strong> queenStatus
                                </ListGroup.Item>
                            </ListGroup>
                            <Button variant="primary" className="me-2">Edit Hive</Button>
                            <Button variant="danger">Delete Hive</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
