import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src="BlLOGO.png" width="70px" alt="" />
           <span className="fw-bold">Better</span>Logics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav_link">
            <Nav.Link className="hxn" href="#features">
            <Link className="text-white" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="hxn" href="#features">
                <Link className="text-white"  to="/Portfolio_main">Portfolio</Link>
                </Nav.Link>
              {/* <Nav.Link className="hxn" href="#features"></Nav.Link> */}
              <Nav.Link className="hxn" href="#pricing">Our Services</Nav.Link>
              <Nav.Link className="hxn" href="#pricing">
              <Link className="text-white" to="/Ourteam_main">Our Team</Link>
              </Nav.Link>
              <Nav.Link className="hxn" href="#pricing">
                <Link className="text-white" to="/Crypto_main">About Us</Link>
                </Nav.Link>
              <Nav.Link className="hxn" href="#pricing">
                <Link className="text-white" to="/Contact_main">Contact Us</Link>
                </Nav.Link>
              {/* <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">App</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">404</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sample Page
                </NavDropdown.Item>
              </NavDropdown> */}

              {/* <NavDropdown title="EN" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">App</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">404</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sample Page
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Button className="btn bn_hxn">Sign in</Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
