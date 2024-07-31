import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDeleteHive, useGetHiveById } from '../../hooks/useHives';

import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

import Loading from '../loading/Loading';
import Delete from '../delete/Delete';
import { formatIsoStringToDate } from '../../utils/dateUtils';
import { useGetInspectionsCountByHiveId } from '../../hooks/useInspections';
import { useGetHarvestsCountByHiveId } from '../../hooks/useHarvests';
import { useGetBeeQueensCountByHiveId } from '../../hooks/useBeeQueens';

export default function HiveDetails() {
    const { hiveId } = useParams();
    const navigate = useNavigate();
    const { hive, isFetching } = useGetHiveById(hiveId);
    const { hiveInspectionsCount } = useGetInspectionsCountByHiveId(hiveId);
    const { hiveHarvestsCount } = useGetHarvestsCountByHiveId(hiveId);
    const { hiveBeeQueensCount } = useGetBeeQueensCountByHiveId(hiveId);

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
                                        <strong>Location:</strong> {hive.apiary.name} - {hive.apiary.location}
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
                                        <strong>Date bought:</strong> {formatIsoStringToDate(hive.dateBought)}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Queen Status:</strong> TODO: Queen status
                                    </Card.Text>
                                    <ListGroup className="my-4">
                                        <ListGroup.Item>
                                            <Link to={`/hives/${hive._id}/beeQueens`}><strong>Bee Queens:</strong> {hiveBeeQueensCount}</Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to={`/hives/${hive._id}/inspections`}><strong>Inspections:</strong> {hiveInspectionsCount}</Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link to={`/hives/${hive._id}/harvests`}><strong>Harvests:</strong> {hiveHarvestsCount}</Link>
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
