import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="nav-logo">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <div>
              <InputGroup className="mb-3 mt-3">
                <Form.Control aria-label="Last name" />
              </InputGroup>
            </div>

            <Nav.Link className="nav-item" href="#home">Business</Nav.Link>
            <Nav.Link className="nav-item" href="#home">Explore</Nav.Link>
            <Nav.Link className="nav-item" href="#link">Log in</Nav.Link>

            <Button variant="outline-primary" className="nav-btn" size="sm">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
