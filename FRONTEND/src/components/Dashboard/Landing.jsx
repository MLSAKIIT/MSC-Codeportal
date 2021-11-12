import React from 'react'
import '../Dashboard/Landing.css';
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import img1 from "../Dashboard/ide.svg";
import img2 from "../Dashboard/practice.svg";
import styled from "styled-components";


export default function Landing() {
    return (
        <CurvyBackground>
         <div class="custom-shape-divider-top-1636734134">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
               <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
               <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
         </div>
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
                            <CustomButton variant="primary" size="lg" href="/ide">Open Online IDE</CustomButton>
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
                           <CustomButton variant="primary" size="lg" href="/dashboard-sheet">Start Practicing</CustomButton>
                        </Col>
                     </Row>
                </Col>
             </Row>
         </Container>
        </CurvyBackground>
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

const CurvyBackground = styled.div`
      position: relative;
`;