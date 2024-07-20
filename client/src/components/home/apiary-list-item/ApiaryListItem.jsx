import { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import hivesAPI from '../../../api/hives-api';

import HiveCard from './hive-card/HiveCard';
import Loading from '../../loading/Loading';

export default function ApiaryListItem({
    apiaryId,
    apiaryName,
    eventKey
}) {
    const [apiaryHives, setApiaryHives] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getAll();

            setApiaryHives(Object.values(result));
            setIsLoading(false);
        })();
    }, []);


    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{apiaryName}</Accordion.Header>
            <Accordion.Body>
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