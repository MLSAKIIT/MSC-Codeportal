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
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
