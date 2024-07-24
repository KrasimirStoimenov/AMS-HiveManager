import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

import BeeQueenListItem from './beeQueen-list-item/BeeQueenListItem';
import { Col, Row } from 'react-bootstrap';
import Loading from '../loading/Loading';
import { useFetch } from '../../hooks/useFetch';

export default function BeeQueenList() {
    const { data: beeQueens, isFetching } = useFetch('http://localhost:3030/jsonstore/beeQueens', []);

    return (
        <Container>
            <Row className='pb-3 pt-3'>
                <Col className='text-start text-primary'>
                    <h2>Bee Queens List</h2>
                </Col>
                <Col className='text-end pt-1'>
                    <Button as={Link} to={'/beeQueen/add'} variant='outline-primary'><i className="bi bi-plus-lg"></i> Add Bee Queen</Button>
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
                            />
                        )}
                    </tbody>
                </Table>
            }
        </Container>
    );
};