import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function HeaderLayouts() {

    const navLinks = [
        {
            title: 'All Items',
        },
        {
            title: 'Dressess',
        },
        {
            title: 'Seasonal',
        },
        {
            title: 'Denims',
        },
        {
            title: 'Tshirts',
        },
        {
            title: 'Tops',
        },
    ]

    return (
        <div>
            <Navbar collapseOnSelect expand="lg"
                bg='black'
                variant='black'
            >
                <Container>
                    <Navbar.Brand href="#home" style={{ color: "yellow", fontWeight: 'bold', fontStyle: 'italic' }}>
                        <img
                            alt=""
                            src="https://radikadilanka.com/rdfashion/static/media/logo2.e5c0eee2.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        e-Fashion
                    </Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: "white" }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {navLinks.map((val, key) => {
                                return <Nav.Link href="#features" style={{ color: 'white' }} key={key}>{val.title.toUpperCase()}</Nav.Link>
                            })}

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes" style={{ color: 'white' }}>
                                CART
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
