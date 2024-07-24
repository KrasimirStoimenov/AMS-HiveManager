import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import requester from '../../api/requester';

const initialFormValues = {
    isAlive: true,
    year: new Date().getFullYear(),
    colorMark: '',
    hive: '',
};

export default function BeeQueenAdd() {
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(initialFormValues, submitHiveHandler);
    const [isLoading, setIsLoading] = useState(false);

    async function submitHiveHandler() {
        setIsLoading(true);
        await requester.post('http://localhost:3030/jsonstore/beeQueens', values);

        setIsLoading(false);
        navigate(`/beeQueens`);
    }

    return (
        <Form onSubmit={submitHandler}>
            <fieldset>
                <legend className="text-primary">Add Bee Queen</legend>
                <Form.Group className="field" controlId="year">
                    <Form.Control
                        type="number"
                        name="year"
                        value={values.year}
                        onChange={changeHandler}
                        required
                    />
                    <Form.Label>Year</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="colorMark">
                    <Form.Control
                        type="text"
                        name="colorMark"
                        value={values.colorMark}
                        onChange={changeHandler}
                    />
                    <Form.Label>Color Mark</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="hive">
                    <Form.Select
                        name="hive"
                        value={values.hive}
                        onChange={changeHandler}
                        required>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                    <Form.Label>Hive</Form.Label>
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