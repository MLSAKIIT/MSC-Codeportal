import React from "react";
import { Navbar, Container, Nav, Button, Row, Col, Form } from "react-bootstrap";
import { ReactComponent as LoginSVG } from './Login.svg';

const Login = () => {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#">Logo</Navbar.Brand>
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
                <Container fluid="md" className="loginSpacing">
                    <Row>
                        <Col md={{ span: 5, order: 'last' }} className="mx-auto my-auto">
                            <LoginSVG width="90%" />
                            <span className="login-body">Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit.</span>
                        </Col>
                        <Col md={{ span: 7, order: 'first' }} className="mx-auto my-auto">
                            <p className="login-heading">Sign In</p>
                            <p className="login-body">Email Address</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control size="lg" type="email" placeholder="example@xyz.com" className="w-75 p-3 formSpace" /></Form.Group>
                                <Button size="lg" variant="primary" type="submit" className="btn-xs-block w-75 p-3 navText">Log In Without Password</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Login