import { useParams } from 'react-router-dom';

import { useGetHiveById } from '../../hooks/useHives';

import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

import Loading from '../loading/Loading';

export default function HiveDetails() {
    const { hiveId } = useParams();
    const { hive, isFetching } = useGetHiveById(hiveId);

    return (
        < Container className="my-5" >
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h5">Hive Details</Card.Header>
                        {isFetching
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
