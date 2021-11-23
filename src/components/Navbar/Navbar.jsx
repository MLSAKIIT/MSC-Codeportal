import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import qode_white from "./images/qode_white.png";

import "../Navbar/Navbar.css";

export default function NavBar() {
  return (
    <div>
      <div>
        <Navbar
          className="color-nav"
          collapseOnSelect
          expand="lg"
          //   variant="light"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="/#home">
              <img
                src={qode_white}
                className="d-inline-block align-top nav_logo"
              />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

            {/* <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/#home" className="px-4 my-auto navText">Home</Nav.Link>
                                <Nav.Link href="/#about" className="px-4 my-auto navText">About</Nav.Link>
                                <Nav.Link href="/#features" className="px-4 my-auto navText">Features</Nav.Link>
                                <Nav.Link href="/login" className="px-4 my-auto navText"><Button variant="primary" size="md">Sign In</Button>{' '}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </div>
    </div>
  );
}