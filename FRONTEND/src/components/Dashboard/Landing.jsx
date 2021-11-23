import React from 'react'
import '../Dashboard/Landing.css';
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import img1 from "../Dashboard/ide.svg";
import img2 from "../Dashboard/practice.svg"


export default function Landing() {
    return (
        <div className="getstarted-dashboard">
         <Container className="cols">
             <Row className="rows">
                  {/* <div className="greet">Hi, Username</div> */}
                <Col xs={12} md={6} className="rows1">
                     <Row>
                        <Col className="image">
                          <img src={img1} alt="" />
                        </Col>
                     </Row>
                     <Row>
                        <Col className="des-p">
                            <div className="des-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec.</div>
                            <Button className="white-btn" variant="primary" size="lg" href="/ide">Open Online IDE</Button>{' '}
                        </Col>
                     </Row>
                </Col>
                <Col xs={12} md={6} className="rows2">
                     <Row>
                        <Col className="image">                          
                           <img src={img2} alt="" />
                       </Col>
                     </Row>
                     <Row>
                        <Col className="des-p">
                           <div className="des-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec.</div>
                           <Button className="white-btn" variant="primary" size="lg" href="/dashboard-sheet">Start Practicing</Button>{' '}
                        </Col>
                     </Row>
                </Col>
             </Row>
         </Container>
        </div>
    )
}
