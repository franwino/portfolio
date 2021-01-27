import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function SiteNavbar() {
  return (
    <Navbar
      bg="light"
      variant="light"
      fixed="top"
      className="mr-auto"
      collapseOnSelect
      expand="sm"
    >
      <Navbar.Brand href="#home">FW</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
