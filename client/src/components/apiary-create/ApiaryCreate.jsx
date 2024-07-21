import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import '../../../public/input-form-styles.css'

export default function ApiaryCreate() {
    return (
        <Form>
            <fieldset>
                <legend class="text-primary">Add Apiary</legend>
                <Form.Group className="field" controlId="apiaryName">
                    <Form.Control
                        type="text"
                        name="apiaryName"
                        required
                    />
                    <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="location">
                    <Form.Control
                        type="text"
                        name="location"
                        required
                    />
                    <Form.Label>Location</Form.Label>
                </Form.Group>

                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control'>Back</Button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='btn-success form-control'>Create</Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}
