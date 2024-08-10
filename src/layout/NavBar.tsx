import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsRocketTakeoffFill } from "react-icons/bs";

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed="top" collapseOnSelect expand="lg">
        <Container fluid className="mx-5">
          <Navbar.Brand as={Link} to="/">
            <img alt="logo" src="\images\logo.png" width="30" height="30" className="d-inline-block align-top me-2" />
            SpaceLens
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                | Go Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Text className="me-auto fs-6 d-none d-lg-block fw-medium">
            <BsRocketTakeoffFill className="me-1" /> Exploring the Universe, One Article at a Time
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
