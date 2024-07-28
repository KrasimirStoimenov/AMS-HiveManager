import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import requester from '../../api/requester';
import { useAddBeeQueen } from '../../hooks/useBeeQueens';

const initialFormValues = {
    isAlive: true,
    year: new Date().getFullYear(),
    colorMark: '',
    hive: '',
};

export default function BeeQueenAdd() {
    const navigate = useNavigate();
    const addBeeQueenHandler = useAddBeeQueen();
    const [isAdding, setIsAdding] = useState(false);

    const submitBeeQueenHandler = async (values) => {
        try {
            setIsAdding(true);
            await addBeeQueenHandler(values);
            setIsAdding(false);
            navigate(`/beeQueens`);
        } catch (error) {
            alert(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, submitBeeQueenHandler);

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
                        disabled={isAdding}
                    />
                    <Form.Label>Year</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="colorMark">
                    <Form.Control
                        type="text"
                        name="colorMark"
                        value={values.colorMark}
                        onChange={changeHandler}
                        disabled={isAdding}
                    />
                    <Form.Label>Color Mark</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="hive">
                    <Form.Select
                        name="hive"
                        value={values.hive}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                    <Form.Label>Hive</Form.Label>
                </Form.Group>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' onClick={() => navigate(-1)} disabled={isAdding}>Back</Button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' type="submit" variant='success' disabled={isAdding}>
                            {isAdding ? 'Adding...' : 'Add'}
                        </Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}