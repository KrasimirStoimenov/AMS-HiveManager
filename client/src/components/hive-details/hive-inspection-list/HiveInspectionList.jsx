import { Link, useParams } from 'react-router-dom';
import { useGetByHiveId } from '../../../hooks/useInspections';

import { Col, Row, Table, Container, Button } from 'react-bootstrap';
import HiveInspectionListItem from './hive-inspection-list-item/HiveInspectionListItem';
import Loading from '../../loading/Loading';

export default function HiveInspectionList() {
    const { hiveId } = useParams();
    const { hiveInspections, isFetching } = useGetByHiveId(hiveId);

    return (
        <Container>
            <Row className='pb-3 pt-3'>
                <Col className='text-start text-primary'>
                    <h2>Inspections for hive: №HiveNumber</h2>
                </Col>
                <Col className='text-end pt-1'>
                    <Button as={Link} to={'/inspections/add'} variant='outline-primary'><i className="bi bi-plus-lg"></i> Add Inspection</Button>
                </Col>
            </Row>
            {isFetching
                ? <Loading />
                : <Table border={1}>
                    <thead>
                        <tr>
                            <th>Inspection Date</th>
                            <th>Weather Conditions</th>
                            <th>Observations</th>
                            <th>Actions Taken</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {hiveInspections.map(hiveInspection =>
                            <HiveInspectionListItem
                                key={hiveInspection._id}
                                hiveInspection={hiveInspection}
                            // deleteClickHandler={deleteClickHandler}
                            />
                        )}
                    </tbody>
                </Table>
            }
        </Container>
    );
}