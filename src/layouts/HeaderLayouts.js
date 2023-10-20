import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function HeaderLayouts() {
 
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"
                bg='black'
                variant='black'
                >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://radikadilanka.com/rdfashion/static/media/logo2.e5c0eee2.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        e-Fashion
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
