import { useGetAllBeeQueens, useGetAllBeeQueensWithHive } from '../../hooks/useBeeQueens';

import { Col, Row, Table, Container } from 'react-bootstrap';

import BeeQueenListItem from './beeQueen-list-item/BeeQueenListItem';
import Loading from '../loading/Loading';

export default function BeeQueenList() {
    const { beeQueens, isFetching } = useGetAllBeeQueensWithHive();

    return (
        <Container>
            <Row className='pb-3 pt-3'>
                <Col className='text-start text-primary'>
                    <h2>Bee Queens List</h2>
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