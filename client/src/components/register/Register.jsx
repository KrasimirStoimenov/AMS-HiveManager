import { useRegister } from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { Container, Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap';

const initialFormValues = {
    email: '',
    password: '',
    'confirm-password': ''
};

export default function Register() {
    const navigate = useNavigate();
    const register = useRegister();

    const registerHandler = async (values) => {
        if (values.email == '' || values.password == '') {
            return alert('All fields are required!');
        }

        if (values.password != values['confirm-password']) {
            return alert('Passwords don\'t match!');
        }

        try {
            await register(values);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, registerHandler);

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title as={'h2'} className="text-center mb-4 mt-2">Register</Card.Title>
                            <Form onSubmit={submitHandler}>
                                <Form.Group controlId="formBasicEmail" className="mb-4">
                                    <FloatingLabel controlId="floatingEmailAddress" label="Email Address">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            value={values.email}
                                            onChange={changeHandler}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" className="mb-4">
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={changeHandler}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group controlId="formConfirmPassword" className="mb-4">
                                    <FloatingLabel controlId="confirm-password" label="Confirm Password">
                                        <Form.Control
                                            type="password"
                                            name="confirm-password"
                                            placeholder="Confirm Password"
                                            value={values['confirm-password']}
                                            onChange={changeHandler}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 p-2">Register</Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <small>Already have an account? <Link to='/login'>Sign In</Link></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
