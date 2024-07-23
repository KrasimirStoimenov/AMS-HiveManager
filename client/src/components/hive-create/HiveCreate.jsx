import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../hooks/useForm';
import hivesAPI from '../../api/hives-api';
import { useNavigate } from 'react-router-dom';

const initialFormValues = {
    number: '',
    type: '',
    status: '',
    color: '',
    dateBought: '',
    timesUsedCount: '',
    apiary: '',
};

export default function HiveCreate() {
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(initialFormValues, submitHiveHandler);

    async function submitHiveHandler() {
        await hivesAPI.create(values);
        navigate(`/`);
    }

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
                    />
                    <Form.Label>Status</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="color">
                    <Form.Control
                        type="text"
                        name="color"
                        value={values.color}
                        onChange={changeHandler}
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
                    />
                    <Form.Label>Times Used Count</Form.Label>
                </Form.Group>
                <Form.Group className="field" controlId="apiary">
                    <Form.Select
                        name="apiary"
                        value={values.apiary}
                        onChange={changeHandler}
                        required>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                    <Form.Label>Apiary</Form.Label>
                </Form.Group>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' onClick={() => navigate(-1)}>Back</Button>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <Button className='form-control' type="submit" variant='success'>Create</Button>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    );
}