import React from 'react'
import '../Dashboard/Landing.css';
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import img1 from "../Dashboard/ide.svg";
import img2 from "../Dashboard/practice.svg";
import styled from "styled-components";


export default function Landing() {
    return (
        <div className="getstarted-dashboard">
         <Container className="cols">
             <Row className="rows">
                  <div className="greet">Hi, Username</div>
                <Col xs={12} md={6}className="rows1">
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

const CustomButton = styled(Button)`
   display: inline-block;
   align-self: center;
   font-weight: 600;
   line-height: 1.5;
   color: #212529;
   text-align: center;
   text-decoration: none;
   vertical-align: middle;
   cursor: pointer;
   background-color: #f3e6e8;
   background-image: linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%);
   padding: .5rem 1rem;
   font-size: 1.25rem;
   border-radius: 25px;
   user-select: none;
   border: none;

   &:hover {
      background-color: #d9e4f5;
      background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
      transition: background-color 0.5s ease;
      color: white;
      border: none;
   }
`;
