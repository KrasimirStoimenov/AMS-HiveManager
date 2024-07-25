import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import { useAddApiary } from '../../hooks/useApiaries';

const initialFormValues = {
    name: '',
    location: '',
};

export default function ApiaryAdd() {
    const navigate = useNavigate();
    const apiaryAdd = useAddApiary();
    const [isLoading, setIsLoading] = useState(false);

    const submitFormHandler = async (values) => {
        try {
            setIsLoading(true);
            await apiaryAdd(values);
            setIsLoading(false);

            navigate(`/`);
        } catch (error) {
            alert(error.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, submitFormHandler);


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
                        <Button className='form-control' onClick={() => navigate(-1)}>Back</Button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' type="submit" variant='success' disabled={isLoading}>
                            {isLoading
                                ? 'Adding...'
                                : 'Add'}
                        </Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}
