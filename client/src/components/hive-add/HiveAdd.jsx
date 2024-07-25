import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import requester from '../../api/requester';
import { useAddHive } from '../../hooks/useHives';

const initialFormValues = {
    number: '',
    type: '',
    status: '',
    color: '',
    dateBought: '',
    timesUsedCount: '',
    apiary: '',
};

export default function HiveAdd() {
    const navigate = useNavigate();
    const addHiveHandler = useAddHive();
    const [isAdding, setIsAdding] = useState(false);

    const submitHiveHandler = async (values) => {
        try {
            setIsAdding(true);
            await addHiveHandler(values);
            setIsAdding(false);
            navigate(`/`);
        } catch (error) {
            alert(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, submitHiveHandler);

    return (
        <Form onSubmit={submitHandler}>
            <fieldset>
                <legend className="text-primary">Add Hive</legend>
                <Form.Group className="field" controlId="number">
                    <Form.Control
                        type="number"
                        name="number"
                        value={values.number}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}
                    />
                    <Form.Label>Number</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="type">
                    <Form.Control
                        type="text"
                        name="type"
                        value={values.type}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}
                    />
                    <Form.Label>Type</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="status">
                    <Form.Control
                        type="text"
                        name="status"
                        value={values.status}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}
                    />
                    <Form.Label>Status</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="color">
                    <Form.Control
                        type="text"
                        name="color"
                        value={values.color}
                        onChange={changeHandler}
                        disabled={isAdding}
                    />
                    <Form.Label>Color</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="dateBought">
                    <Form.Control
                        type="date"
                        name="dateBought"
                        value={values.dateBought}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}
                    />
                    <Form.Label>Date Bought</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="timesUsedCount">
                    <Form.Control
                        type="text"
                        name="timesUsedCount"
                        value={values.timesUsedCount}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}
                    />
                    <Form.Label>Times Used Count</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="apiary">
                    <Form.Select
                        name="apiary"
                        value={values.apiary}
                        onChange={changeHandler}
                        required
                        disabled={isAdding}>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                    <Form.Label>Apiary</Form.Label>
                </Form.Group>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' onClick={() => navigate(-1)} disabled={isAdding}>Back</Button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' type="submit" variant='success' disabled={isAdding}>
                            {isAdding
                                ? 'Adding...'
                                : 'Add'}
                        </Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}