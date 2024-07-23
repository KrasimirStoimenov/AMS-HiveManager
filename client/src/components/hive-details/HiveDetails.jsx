import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import hivesAPI from '../../api/hives-api';
import Loading from '../loading/Loading';

export default function HiveDetails() {
    const [hive, setHive] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { hiveId } = useParams();

    useEffect(() => {
        (async () => {
            const hive = await hivesAPI.getById(hiveId);

            setHive(hive);
            setIsLoading(false);
        })();
    }, []);

    return (
        < Container className="my-5" >
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h5">Hive Details</Card.Header>
                        {isLoading
                            ? <Loading />
                            : <Card.Body>
                                <Card.Title>Hive №{hive.number}</Card.Title>
                                <Card.Text>
                                    <strong>Location:</strong> TODO:Apiary location when context is introduced
                                </Card.Text>
                                <Card.Text>
                                    <strong>Type:</strong> {hive.type}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Status:</strong> {hive.status}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Color:</strong> {hive.color}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Date bought:</strong> {hive.dateBought}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Times Used:</strong> {hive.timesUsedCount}
                                </Card.Text>
                                <Card.Text>
                                <strong>Queen Status:</strong> TODO: Queen status
                                </Card.Text>
                                <ListGroup className="my-4">
                                    <ListGroup.Item>
                                        <strong>Inspections:</strong> TODO: Inspections
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Harvests:</strong> TODO: Harvests
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button variant="primary" className="me-2">Edit Hive</Button>
                                <Button variant="danger">Delete Hive</Button>
                            </Card.Body>
                        }
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
