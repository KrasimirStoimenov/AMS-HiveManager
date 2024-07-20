import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-2 mb-3">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>ASM-HiveManager</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to='/hives'>Hives</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/beeQueens'>BeeQueens</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}