import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-bottom justify-content-center mx-auto text-center mb-5"
    >
      <Container className="mx-auto">
        <Navbar.Brand href="#home">Pricing example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#home">Enterprise</Nav.Link>
            <Nav.Link href="#home">Support</Nav.Link>
            <Nav.Link href="#home">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
