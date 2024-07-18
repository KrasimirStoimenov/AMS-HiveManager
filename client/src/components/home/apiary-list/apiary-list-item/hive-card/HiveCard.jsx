import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HiveCard() {
    return (
        <Col>
            <Link to={'/'}>
                <Card>
                    <Card.Img height='250' variant="top" src="https://thewildlifecommunity.co.uk/cdn/shop/products/SBH1_Solitary_Bee_Hive_5_Web.jpg?v=1622645194" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <Card.Footer className='text-end'>Click for details</Card.Footer>
                </Card>
            </Link>
        </Col>
    );
}