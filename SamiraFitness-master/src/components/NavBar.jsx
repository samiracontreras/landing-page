import * as React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link'
import Image from 'react-bootstrap/Image'
import imgCarrito from '../images/cart4.svg'
import { Outlet, useLocation } from "react-router-dom"
import { useCart } from '../context/CartContext'
import { useParams } from 'react-router-dom'


export const NavBar = () => {

    const { cart } = useCart()
    const {programa} = useParams()

    let location = useLocation().pathname;
    return (
        <>
            <Navbar className='nav' variant='light' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">SAMIRA FITNESS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navBar__items">
                            <Navbar.Text className='mx-3 fw-bold' as={Link} to="/">Home</Navbar.Text>
                            <Navbar.Text className='mx-3 fw-bold' as={Link} to="/programas">Programas</Navbar.Text>
                            {location !== "/programas" && location !== "/cart" && <Navbar.Text className='mx-3 fw-bold' as={Link} to="#contacto">Contacto</Navbar.Text>}
                            {location !== "/programas" && location !== "/cart" && location !== `/programas/${programa}` && <Navbar.Text className='mx-3 fw-bold' as={Link} to="#sobreMi">Sobre mí</Navbar.Text>}
                        </Nav>
                    </Navbar.Collapse>


                    <Navbar.Collapse className='justify-content-end'>
                        <Nav.Link className='mx-2 d-flex align-items-center' as={Link} to="/cart">
                            <Image className='iconoCarrito' src={imgCarrito} fluid />
                            <p style={{ color: 'black', margin: '0', marginLeft: '10px' }}>{`(${cart.length})`}</p>
                        </Nav.Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}