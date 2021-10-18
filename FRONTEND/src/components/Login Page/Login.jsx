import React, { useEffect, useState } from "react";
import Sawo from 'sawo'
import { Navbar, Container, Nav, Button, Row, Col, Form } from "react-bootstrap";
import { ReactComponent as LoginSVG } from './Login.svg';
// import env from "react-dotenv";

import '../Login Page/Login.css'


const Login = () => {

    const [isUserLoggedIn, setUserLoggedIn] = useState(false)
    const [payload, setPayload] = useState({})


    useEffect(() => {
        var config = {
            containerID: "sawo-container",
            identifierType: "email",
            apiKey: process.env.REACT_APP_API_KEY,
            onSuccess: (payload) => {
                console.log("Payload : " + JSON.stringify(payload));
                setUserLoggedIn(true);
                setPayload(payload);
                console.log(payload)
            },
        };

        let sawo = new Sawo(config)

        sawo.showForm()
    }, [])

    return (
        <div className="d-flex vh-100">
            <Container fluid="md" className="loginSpacing d-flex justify-content-center">
                <Row>
                    <Col md={{ span: 6, order: 'last' }} className="mx-auto my-auto">
                        <LoginSVG width="90%" />
                        <span className="login-body">Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit.</span>
                    </Col>
                    <Col md={{ span: 6, order: 'first' }} className="mx-auto my-auto">
                        <p className="login-heading">Sign In</p>
                        {!isUserLoggedIn ? (
                            <div id="sawo-container" className="sawo-cont"></div>
                        ) : (
                            <div>
                                <h2>User Successful Login</h2>
                                <div>UserId: {payload.user_id}</div>
                                <div>Verification Token: {payload.verification_token}</div>
                                <div>Name: {((payload || {}).customFieldInputValues || {}).Name}</div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login