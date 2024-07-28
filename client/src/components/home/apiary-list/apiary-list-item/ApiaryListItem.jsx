import { useState } from 'react';
import { useGetByApiaryId } from '../../../../hooks/useHives';

import { Link } from 'react-router-dom';
import { Row, Accordion, Button } from 'react-bootstrap';

import HiveCard from './hive-card/HiveCard';
import Loading from '../../../loading/Loading';

export default function ApiaryListItem({
    apiaryId,
    apiaryName,
    apiaryLocation,
    eventKey
}) {
    const { apiaryHives, isFetching } = useGetByApiaryId(apiaryId);
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
                        {apiaryHives.length > 0
                            ? (apiaryHives.map(hive =>
                                <HiveCard
                                    key={hive._id}
                                    hive={hive}
                                />
                            ))
                            : <p>It looks like you haven't added any hives yet. Start managing your apiary by adding your first hive.</p>
                        }

                    </Row>
                }
            </Accordion.Body>
        </Accordion.Item>
    );
}