import React from "react";
import Nav from "react-bootstrap/Nav";

function CustomFooter() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Servicios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Redes sociales</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">
        {new Date().getFullYear()} Profamilia Equipo Minticc. Todos los derechos
        reservados.
      </p>
    </>
  );
}
export default CustomFooter;
