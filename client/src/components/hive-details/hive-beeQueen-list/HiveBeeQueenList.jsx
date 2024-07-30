import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import { useDeleteBeeQueen, useGetAllBeeQueens } from '../../../hooks/useBeeQueens';
import { useHiveContext } from '../../../contexts/HiveContext';

import { Col, Row, Table, Container, Button } from 'react-bootstrap';

import Delete from '../../delete/Delete';
import Loading from '../../loading/Loading';
import HiveBeeQueenListItem from './hive-beeQueen-list-item/HiveBeeQueenListItem';

export default function HiveBeeQueenList() {
    const { hiveId } = useParams();
    const { hiveNumber } = useHiveContext();
    const { beeQueens, isFetching, changeBeeQueens } = useGetAllBeeQueens();
    const deleteBeeQueenHandler = useDeleteBeeQueen();
    const [showDeleteById, setShowDeleteById] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteClickHandler = (beeQueenId) => { setShowDeleteById(beeQueenId); };
    const closeHandler = () => { setShowDeleteById(null); };

    const deleteHandler = async (beeQueenId) => {
        try {
            setIsDeleting(true);
            await deleteBeeQueenHandler(beeQueenId);
            changeBeeQueens(oldState => oldState.filter(beeQueen => beeQueen._id !== beeQueenId));
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
            <Container>
                <Row className='pb-3 pt-3'>
                    <Col className='text-start text-primary'>
                        <h2>Bee Queens for hive: {hiveNumber ? `№${hiveNumber}` : hiveId}</h2>
                    </Col>
                    <Col className='text-end pt-1'>
                        <Button as={Link} to={`/hives/${hiveId}/beeQueens/add`} variant='outline-primary'><i className="bi bi-plus-lg"></i> Add Bee Queen</Button>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {beeQueens.map(beeQueen =>
                                <HiveBeeQueenListItem
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