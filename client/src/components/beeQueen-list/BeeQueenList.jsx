import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

import beeQueensAPI from '../../api/beeQueens-api';
import BeeQueenListItem from './beeQueen-list-item/BeeQueenListItem';
import { Col, Row } from 'react-bootstrap';
import Loading from '../loading/Loading';

export default function BeeQueenList() {
    const [beeQueens, setBeeQueens] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await beeQueensAPI.getAll();

            setBeeQueens(Object.values(result));
            setIsLoading(false);
        })();
    }, []);
    return (
        <Container>
            <Row className='pb-3 pt-3'>
                <Col className='text-start text-primary'>
                    <h2>Bee Queens List</h2>
                </Col>
                <Col className='text-end'>
                    <Button as={Link} to={'/beeQueen/add'} variant='outline-primary'><i className="bi bi-plus-lg"></i> Add Bee Queen</Button>
                </Col>
            </Row>
            {isLoading
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
                        {beeQueens.map(beeQueen =>
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