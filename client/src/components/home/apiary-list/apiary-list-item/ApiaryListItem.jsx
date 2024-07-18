import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

import HiveCard from './hive-card/HiveCard';

export default function ApiaryListItem({
    apiaryName,
    eventKey
}) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{apiaryName}</Accordion.Header>
            <Accordion.Body>
                <Row xs={1} md={3} lg={3} className="g-4">
                    <HiveCard />
                    <HiveCard />
                    <HiveCard />
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    );
}