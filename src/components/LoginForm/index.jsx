import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function LoginForm() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select placeholder="Tipo de identificacion">
                <option value="select">Tipo de identificacion</option>
                <option>Cedula de ciudadania</option>
                <option>Cedula de extranjeria</option>
                <option>Tarjeta de identidad</option>
                <option>Pasaporte</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Numero de identificacion"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Form.Text>
            <a className="text-primary">¿Has olvidado tu contraseña?</a>
          </Form.Text>
          <Button variant="primary" type="submit">
            Iniciar sesion
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      ;
    </>
  );
}
export default LoginForm;
