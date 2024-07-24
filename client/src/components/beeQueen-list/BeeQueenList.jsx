import { useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

import BeeQueenListItem from './beeQueen-list-item/BeeQueenListItem';
import { Col, Row } from 'react-bootstrap';
import Loading from '../loading/Loading';
import { useFetch } from '../../hooks/useFetch';
import Delete from '../delete/Delete';
import requester from '../../api/requester';

export default function BeeQueenList() {
    const { data: beeQueens, isFetching, refetch } = useFetch('http://localhost:3030/jsonstore/beeQueens', []);
    const [showDeleteById, setShowDeleteById] = useState(null);

    function deleteClickHandler(beeQueenId) {
        setShowDeleteById(beeQueenId);
    }

    function closeHandler() {
        setShowDeleteById(null);
    }

    async function deleteHandler(beeQueenId) {
        await requester.del(`http://localhost:3030/jsonstore/beeQueens/${beeQueenId}`);

        setShowDeleteById(null);
        refetch();
    }

    return (
        <>
            {showDeleteById && (
                <Delete
                    onClose={closeHandler}
                    onDelete={() => deleteHandler(showDeleteById)}
                />
            )}
            <Container>
                <Row className='pb-3 pt-3'>
                    <Col className='text-start text-primary'>
                        <h2>Bee Queens List</h2>
                    </Col>
                    <Col className='text-end pt-1'>
                        <Button as={Link} to={'/beeQueens/add'} variant='outline-primary'><i className="bi bi-plus-lg"></i> Add Bee Queen</Button>
                    </Col>
                </Row>
                {isFetching
                    ? <Loading />
                    : <Table border={1}>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Color Mark</th>
                                <th>IsAlive</th>
                                <th>HiveId</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(beeQueens).map(beeQueen =>
                                <BeeQueenListItem
                                    key={beeQueen._id}
                                    beeQueen={beeQueen}
                                    deleteClickHandler={deleteClickHandler}
                                />
                            )}
                        </tbody>
                    </Table>
                }
            </Container>
        </>
    );
};