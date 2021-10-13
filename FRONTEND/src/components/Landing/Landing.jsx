import React from 'react';


//Importing CSS
import '../Landing/Landing.css'

//Importing the Image of The Landing Page
import { ReactComponent as Code2SVG} from './Images/Code2.svg';
import { ReactComponent as Qode} from './Images/qode_white.svg';

import qode_white from './Images/qode_white.png'


//Importing the React-BootStrap Components
import { Navbar, Container, Nav, Button, Row, Col} from "react-bootstrap";

export default function Features()  {
        return (
            <div>

                {/* NavBar of The Landing Page */}

                <div className="Landing-NavBar">
                    <Navbar className="color-nav" collapseOnSelect expand="lg" variant="light" fixed="top">
                        <Container>
                            <Navbar.Brand href="#" className="nav-brand"><img className="nav_logo" src={qode_white}/></Navbar.Brand>
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

                <div className="Landing-desc d-flex">
                    <Container className="d-flex">
                        <Row className="justify-content-center">
                            <Col md={{span: 5, order: 'last'}} className="mx-auto my-auto">
                                <Code2SVG width="80%"/>
                            </Col>
                            <Col md={{span: 7, order: 'first'}} className="mx-auto my-auto">
                                <span className="desc-text">Your one stop online portal to code, practice and learn from zero to expert.</span>
                                <br/>
                                <Button size="lg" variant="primary" className="btn-xs-block w-4 py-3 land-button">Get Started</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    
}