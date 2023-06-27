import React, {useState} from "react"
import {clothes} from '../../store/data'
import check from "../../assets/Desktop/Ícones/check-circle.png"
import close from "../../assets/Desktop/Ícones/Icon Color.png"
import { Row, Col, Form, Modal, Card} from 'react-bootstrap';
import "./cardPrice.css"
export default function CardPrice (){
  const [modalShow, setModalShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (cardId) => {
      setSelectedCard(cardId);
      setModalShow(!modalShow)
  };

  const listModel = clothes.map(clothes => 
    <div key={clothes.id}>
    <Col>
    <Card className="card-image">
    <Card.Img variant="top" className="card-image-border" src={clothes.imagem}/>
    <Card.Body>
    <Card.Title className="card-title-price">{clothes.title}</Card.Title>
    <Card.Text className="card-text">
    {clothes.text}
    </Card.Text>
    <Card.Title className="card-title-price">{clothes.price}</Card.Title>
    <button className="card-button" onClick={()=> handleOpen(clothes.id)}>Ver mais</button>
  </Card.Body>
  </Card>
  </Col>
  </div>
  )

  
    return (
      <>
      <h3 className="title">Produtos que estão bombando!</h3>
      <Row className="justify-content-md-center mb-4" xs="auto">
        {listModel}
      </Row>
      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
          <Modal.Header className="modal-header">
            <img src={check} alt='Icon check' className="modal-icon"/>
            <Modal.Title id="contained-modal-title-left" className="modal-title">
            Confira detalhes sobre o produto
            </Modal.Title>
              <img src={close} alt="Icon close" onClick={() => setSelectedCard(!selectedCard)}/>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-flex">
              <div>
                <img src={clothes.find((clothes) => clothes.id === selectedCard).imagem} alt='imagem-modelo' className="modal-image"/>
              </div>
              <div>
                  <Modal.Title className="modal-title-price">{clothes.find((clothes) => clothes.id === selectedCard).title}</Modal.Title>
                  <p className="modal-text">{clothes.find((clothes) => clothes.id === selectedCard).text}</p>
                  <hr/>
                  <Modal.Title className="modal-title-price">{clothes.find((clothes) => clothes.id === selectedCard).price}</Modal.Title>
                  <p className="modal-text-light">Vendido e entregue por Riachuelo</p>
                  <hr/>
                  <p className="modal-text-color">Cores:</p>
                    <Form>
                    <label className="modal-label">
                    <input type="radio" name="myRadio" value="option1" className="modal-input"/>
                    Azul claro
                  </label>
                  <label className="modal-label">
                    <input type="radio" name="myRadio" value="option1" className="modal-input" />
                    Offwhite
                  </label>
                  <label className="modal-label">
                    <input type="radio" name="myRadio" value="option1" className="modal-input" />
                    Preto
                  </label>
                    </Form>
                    <hr/>
                    <p className="modal-text-color">Tamanho:</p>
                    <Form>
                      <label className="modal-label">
                        <input type="radio" name="myRadio" value="option1" className="modal-input" />
                        PP 
                      </label>
                      <label className="modal-label">
                        <input type="radio" name="myRadio" value="option1" className="modal-input" />
                        P
                      </label>
                      <label className="modal-label">
                        <input type="radio" name="myRadio" value="option1" className="modal-input" />
                        M
                      </label>
                      <label className="modal-label">
                      <input type="radio" name="myRadio" value="option1" className="modal-input" />
                        G
                      </label>
                      <label className="modal-label">
                        <input type="radio" name="myRadio" value="option1" className="modal-input" />
                        GG
                      </label>
                    </Form>

                    <button className="modal-button">Adicionar à sacola</button>
                </div>
              </div>
            </Modal.Body>
         </div>
         </div>
      )}
    </>
    
    )
}