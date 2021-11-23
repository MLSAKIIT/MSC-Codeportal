import React, { Component, useEffect, useState } from "react";
import Sawo from 'sawo'
import { Navbar, Container, Nav, Button, Row, Col, Form } from "react-bootstrap";
import { ReactComponent as LoginSVG } from './Login.svg';
import GoogleLogin from "react-google-login";
import '../Login Page/Login.css'


export class Login extends Component {

    // const [isUserLoggedIn, setUserLoggedIn] = useState(false)
    // const [payload, setPayload] = useState({})

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    // useEffect(() => {
    //     var config = {
    //         containerID: "sawo-container",
    //         identifierType: "email",
    //         apiKey: process.env.REACT_APP_API_KEY,
    //         onSuccess: (payload) => {
    //             console.log("Payload : " + JSON.stringify(payload));
    //             setUserLoggedIn(true);
    //             setPayload(payload);
    //             console.log(payload)
    //         },
    //     };

    //     let sawo = new Sawo(config)

    //     sawo.showForm()
    // }, [])
    render() {
    return (
        <div className="d-flex vh-100">
            <Container fluid="md" className="loginSpacing d-flex justify-content-center">
                <Row>
                    <Col md={{ span: 6, order: 'last' }} className="mx-auto my-auto login-col" >
                        <LoginSVG width="90%" />
                        <span className="login-body">Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit.</span>
                    </Col>
                    <Col md={{ span: 6, order: 'first' }} className="login-col1 mx-auto my-auto " >
                        <p className="login-heading">Sign In </p>
                            
                            <GoogleLogin
                                clientId="802120363335-rstuce3ra0vst4qo7nf5iiunbthne056.apps.googleusercontent.com"
                                buttonText="Sign In with Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            
                            
                        {/* {!isUserLoggedIn ? (
                            <div id="sawo-container" className="sawo-cont"></div>
                        ) : (
                            <div>
                                <h2>User Successful Login</h2>
                                <div>UserId: {payload.user_id}</div>
                                <div>Verification Token: {payload.verification_token}</div>
                                <div>Name: {((payload || {}).customFieldInputValues || {}).Name}</div>
                            </div>
                        )} */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
    }
}

export default Login;