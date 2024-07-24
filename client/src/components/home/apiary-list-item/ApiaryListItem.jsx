import { useState } from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import HiveCard from './hive-card/HiveCard';
import Loading from '../../loading/Loading';
import { useFetch } from '../../../hooks/useFetch';

export default function ApiaryListItem({
    apiaryId,
    apiaryName,
    apiaryLocation,
    eventKey
}) {
    const { data: apiaryHives, isFetching } = useFetch('http://localhost:3030/jsonstore/hives', []);

    const [showAddHiveButton, setShowAddHiveButton] = useState(true);
    const handleShow = () => setShowAddHiveButton(true);
    const handleClose = () => setShowAddHiveButton(false);

    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                {apiaryName}
                {apiaryLocation}
            </Accordion.Header>
            <Accordion.Body onEnter={handleShow} onExit={handleClose}>
                {((showAddHiveButton && !isFetching) &&
                    <Button as={Link} to="/hives/add" variant="outline-primary" className="float-end"><i className="bi bi-plus-lg"></i> Add Hive</Button>
                )}

                {isFetching
                    ? <Loading />
                    : <Row xs={1} md={3} lg={4} className="g-4">
                        {Object.values(apiaryHives).map(hive =>
                            <HiveCard
                                key={hive._id}
                                hive={hive}
                            />
                        )}
                    </Row>
                }
            </Accordion.Body>
        </Accordion.Item>
    );
}