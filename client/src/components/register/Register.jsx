import { Link, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useRegister } from '../../hooks/useAuth';

import { Container, Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const initialFormValues = {
    email: '',
    password: '',
    'confirm-password': ''
};

export default function Register() {
    const navigate = useNavigate();
    const register = useRegister();

    const registerHandler = async (values) => {
        const email = values.email;
        const password = values.password;
        const confirmPassword = values['confirm-password'];

        if (email == '' || password == '') {
            return toast.info('All fields are required!');
        }

        if (password != confirmPassword) {
            return toast.info('Passwords don\'t match!');
        }

        try {
            await register(email, password);
            navigate('/');
        } catch (error) {
            toast.error('Something went wrong. Please try again later or contact support if the issue persists.');
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, registerHandler);

    return (
        <Container>
            <ToastContainer theme='colored' />
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
                                <Button variant="primary" type="submit" className="w-100 p-2">Sign Up</Button>
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
