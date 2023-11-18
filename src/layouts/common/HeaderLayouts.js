import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


export default function HeaderLayouts() {


    const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))')

    const navLinks = [
        {
            title: 'All Items',
            url: '/all'
        },
        {
            title: 'Dressess',
            url: '/dress'

        },
        {
            title: 'Seasonal',
            url: '/seasonal'

        },
        {
            title: 'Denims',
            url: '/senims'

        },
        {
            title: 'Tshirts',
            url: '/tshirts'

        },
        {
            title: 'Tops',
            url: '/tops'

        },

    ]

    return (
        <div>
            <Navbar collapseOnSelect expand="lg"
                bg='black'
                variant='black'
            >


                <Container>
                    <Link to="/" style={{ color: "yellow", fontWeight: 'bold', fontStyle: 'italic', paddingRight: '30px' }}>
                        <img
                            alt=""
                            src="https://radikadilanka.com/rdfashion/static/media/logo2.e5c0eee2.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        e-Fashion
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            {navLinks.map((val, key) => {
                                return <NavLink to={val.url}
                                    // style={{ color: 'white', paddingRight: '40px', textDecoration: 'none' }}

                                    style={({ isActive }) => {
                                        return isActive
                                            ? {
                                                borderRadius: '5px', color: 'white', paddingRight: '40px', textDecoration: 'none',
                                                background: backgroundColor,
                                                border: '1px solid green',

                                            }
                                            : { color: 'white', textAlign: 'center', paddingRight: '40px', textDecoration: 'none' };
                                    }}

                                    key={key} >
                                    {({ isActive }) => {
                                        return (<span style={{ color: isActive ? 'white' : 'inherit' }}>
                                            {val.title.toUpperCase()}
                                        </span>)
                                    }}


                                </NavLink>
                            })}

                        </Nav>
                        <Nav>
                            <NavLink eventKey={2} to={'/cart'} style={{ color: 'white' }}>
                                CART
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
