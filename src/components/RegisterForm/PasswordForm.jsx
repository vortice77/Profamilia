import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { BsBuilding } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { RiUserFill } from "react-icons/ri";

// RiUserFill;HiUser

function PasswordForm() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            Para elegir tu clave, elige tu relacion con nosotros
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <a href={"#home"}>
                    <h3>
                      {" "}
                      <BsBuilding />{" "}
                    </h3>
                    <h6> Empresa/Proveedor </h6>
                  </a>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <a href={"#home"}>
                    <h3>
                      {" "}
                      <BsPeopleFill />{" "}
                    </h3>
                    <h6> Persona </h6>
                  </a>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <a href={"#home"}>
                    <h3>
                      {" "}
                      <MdOutlineHealthAndSafety />{" "}
                    </h3>
                    <h6> Prestador de servicio </h6>
                  </a>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <a href={"#home"}>
                    <h3>
                      {" "}
                      <ImUserTie />{" "}
                    </h3>
                    <h6> Asesor </h6>
                  </a>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <a href={"#home"}>
                    <h3>
                      {" "}
                      <RiUserFill />{" "}
                    </h3>
                    <h6> Independiente </h6>
                  </a>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal.Dialog>
      ;
    </>
  );
}

export default PasswordForm;
