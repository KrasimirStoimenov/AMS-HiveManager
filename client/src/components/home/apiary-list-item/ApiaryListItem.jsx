import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import hivesAPI from '../../../api/hives-api';

import HiveCard from './hive-card/HiveCard';
import Loading from '../../loading/Loading';

export default function ApiaryListItem({
    apiaryId,
    apiaryName,
    apiaryLocation,
    eventKey
}) {
    const [apiaryHives, setApiaryHives] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddHiveButton, setShowAddHiveButton] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getAll();

            setApiaryHives(Object.values(result));
            setIsLoading(false);
        })();
    }, []);

    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                {apiaryName}
                {apiaryLocation}
            </Accordion.Header>
            <Accordion.Body onEnter={() => setShowAddHiveButton(true)} onExit={() => setShowAddHiveButton(false)}>
                {((showAddHiveButton && !isLoading) &&
                    <Button as={Link} to="/hives/add" variant="outline-secondary" className="float-end"><i className="bi bi-plus-lg"></i> Add Hive</Button>
                )}

                {isLoading
                    ? <Loading />
                    : <Row xs={1} md={3} lg={4} className="g-4">
                        {apiaryHives.map(hive =>
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