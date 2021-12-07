import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";

function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={"logo-profamilia.png"}
            className="d-inline-block align-top"
            alt="Profamilia logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Normatividad</Nav.Link>
            <Nav.Link href="#link">Esribenos</Nav.Link>
            <Nav.Link href="#link">Lineas de atencion</Nav.Link>
            <Nav.Link href="#link">Solicitud de Clave</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Iniciar sesion
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Servicios en linea Afiliados
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Servicios en linea Independientes
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Servicios en linea Empleadores
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
