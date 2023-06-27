import React from 'react';
import check from "../../assets/Desktop/Ícones/check-circle.png"
import { Row, Col, Form, Modal } from 'react-bootstrap';
import { clothes } from '../../data';

function ModalShowDetails (props) {
  let itensClothes = clothes.id;
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <img src={check} alt='Icon check' style={{marginRight: "10px"}}/>
        <Modal.Title id="contained-modal-title-vcenter">
        Confira detalhes sobre o produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <img src={itensClothes} alt='imagem-modelo'/>
          </Col>
          <Col>
        <Modal.Title className="modal-title-price">{itensClothes}</Modal.Title>
        <p className="modal-text">{itensClothes}</p>
        <hr/>
        <Modal.Title className="modal-title-price">{itensClothes}</Modal.Title>
        <p className="modal-text-light">Vendido e entregue por Riachuelo</p>
        <hr/>
        <p className="modal-text-color">Cores:</p>
        <Form>
            {['radio'].map((index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  inline
                  label="Azul claro"
                  name="group1"
                  id="Check1"
                />
                <Form.Check
                  inline
                  label="Offwhite"
                  name="group1"
                  id="Check2"
                />
                <Form.Check
                  inline
                  name="group1"
                  label="Preto"
                  id="Check3"
                />
            </div>
          ))}
        </Form>
        <hr/>
        <p className="modal-text-color">Tamanho:</p>
        <Form>
            {['radio'].map((index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  inline
                  label="P"
                  name="group1"
                  id="tamanho1"
                />
                <Form.Check
                  inline
                  label="PP"
                  name="group1"
                  id="tamanho2"
                />
                <Form.Check
                  inline
                  name="group1"
                  label="M"
                  id="tamanho3"
                />
                <Form.Check
                  inline
                  name="group1"
                  label="G"
                  id="tamanho4"
                />
                <Form.Check
                  inline
                  name="group1"
                  label="GG"
                  id="tamanho5"
                />
            </div>
          ))}
        </Form>

        <button className="modal-button">Adicionar à sacola</button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
export default ModalShowDetails;