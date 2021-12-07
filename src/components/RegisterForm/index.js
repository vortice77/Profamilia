import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegisterForm() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Crea tu cuenta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Select placeholder="Tipo de identificacion">
                    <option value="select">Tipo de identificacion*</option>
                    <option>Cedula de ciudadania</option>
                    <option>Cedula de extranjeria</option>
                    <option>Tarjeta de identidad</option>
                    <option>Pasaporte</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Numero de identificacion*"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Telefono celular*" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Correo electronico*" />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Confirmar correo electronico*"
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Form.Text>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Acepto los Terminos del servicio y la politica de privacidad y ley de datos personales. ${type}`}
                />
              </div>
            ))}
          </Form.Text>
          <Button variant="primary" type="submit">
            Siguiente
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      ;
    </>
  );
}
export default RegisterForm;
