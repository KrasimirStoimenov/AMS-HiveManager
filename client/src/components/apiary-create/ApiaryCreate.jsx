import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import '../../../public/input-form-styles.css'
import apiariesAPI from '../../api/apiaries-api';

const initialFormValues = {
    name: '',
    location: '',
};

export default function ApiaryCreate() {
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(initialFormValues, submitFormHandler)

    async function submitFormHandler(values) {
        await apiariesAPI.createApiary(values);
        navigate(`/`);
    }

    return (
        <Form onSubmit={submitHandler}>
            <fieldset>
                <legend className="text-primary">Add Apiary</legend>
                <Form.Group className="field" controlId="name">
                    <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={changeHandler}
                        required
                    />
                    <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="location">
                    <Form.Control
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={changeHandler}
                        required
                    />
                    <Form.Label>Location</Form.Label>
                </Form.Group>

                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control'>Back</Button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button type="submit" className='btn-success form-control'>Create</Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}
