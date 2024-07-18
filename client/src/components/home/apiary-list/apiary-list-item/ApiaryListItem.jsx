import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';

import HiveCard from './hive-card/HiveCard';

export default function ApiaryListItem({
    apiary,
    eventKey
}) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{apiary.name}</Accordion.Header>
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