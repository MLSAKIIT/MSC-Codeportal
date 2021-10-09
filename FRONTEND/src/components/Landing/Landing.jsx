import React, { Component } from 'react';


//Importing CSS
import './CSS/Landing.css'

//Importing the Image of The Landing Page
import { ReactComponent as Code2SVG} from './Images/Code2.svg';


//Importing the React-BootStrap Components
import { Navbar, Container, Nav, Button, Row, Col} from "react-bootstrap";

export default function Features()  {
        return (
            <div>

                {/* NavBar of The Landing Pag */}

                <div className="Landing-NavBar">
                    <Navbar className="color-nav" collapseOnSelect expand="lg" variant="light">
                        <Container>
                            <Navbar.Brand href="#" className="nav-brand">Logo</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#" className="px-4 my-auto navText">Home</Nav.Link>
                                    <Nav.Link href="#" className="px-4 my-auto navText">About</Nav.Link>
                                    <Nav.Link href="#" className="px-4 my-auto navText">Features</Nav.Link>
                                    <Nav.Link href="#" className="px-4 my-auto navText"><Button variant="primary" size="md">Sign In</Button>{' '}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>

                </div>
            </div>
        )
    
}