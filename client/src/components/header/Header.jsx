import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-2 mb-3">
            <Container>
                <Navbar.Brand as={Link} to='/'>AMS-HiveManager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/hives'>Hives</Nav.Link>
                        <Nav.Link as={Link} to='/beeQueens'>BeeQueens</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}