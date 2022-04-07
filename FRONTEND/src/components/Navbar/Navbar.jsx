import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import qode_white from "../Landing/Images/qode_white.png";
import { Link } from "react-scroll";

import "../Navbar/Navbar.css";

export default function NavBar() {
  return (
    <div>
      <div className="Landing-NavBar">
        <Navbar
          className="color-nav"
          collapseOnSelect
          expand="lg"
          variant="light"
          sticky="top"
        >
          <Container>
            <Link to="home" smooth={true}>
              <Navbar.Brand href="#home">
                <img
                  src={qode_white}
                  className="d-inline-block align-top nav_logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                {/* <Nav.Link href="#home" className="px-4 my-auto navText">
                  Home
                </Nav.Link>
                <Link to="about" smooth={true}>
                  <Nav.Link href="#about" className="px-4 my-auto navText">
                    About
                  </Nav.Link>
                </Link>
                <Link to="features" smooth={true}>
                  <Nav.Link href="#features" className="px-4 my-auto navText">
                    Features
                  </Nav.Link>
                </Link> */}

                <Button
                  variant="primary"
                  className="navbar-btn"
                  href="/getstarted"
                  size="sm"
                >
                  Get started
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
