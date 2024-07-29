import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDeleteHive, useGetHiveById } from '../../hooks/useHives';

import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

import Loading from '../loading/Loading';
import Delete from '../delete/Delete';

export default function HiveDetails() {
    const { hiveId } = useParams();
    const navigate = useNavigate();
    const { hive, isFetching } = useGetHiveById(hiveId);

    const deleteHiveHandler = useDeleteHive();
    const [showDeleteById, setShowDeleteById] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteClickHandler = (hiveId) => { setShowDeleteById(hiveId); };
    const closeHandler = () => { setShowDeleteById(null); };

    const deleteHandler = async (hiveId) => {
        try {
            setIsDeleting(true);
            await deleteHiveHandler(hiveId);
            navigate('/');
        } catch (error) {
            alert(error.message);
        } finally {
            setIsDeleting(false);
            setShowDeleteById(null);
        };
    };

    return (
        <>
            {showDeleteById && (
                <Delete
                    onClose={closeHandler}
                    onDelete={() => deleteHandler(showDeleteById)}
                    isDeleting={isDeleting}
                />
            )}

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
                                    <Button variant="warning" className="me-2"><i className="bi bi-pencil-square"></i> Edit</Button>
                                    <Button variant="danger" onClick={() => deleteClickHandler(hive._id)}><i className="bi bi-trash-fill"></i> Delete</Button>
                                </Card.Body>
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
