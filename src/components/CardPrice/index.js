import React, {useState} from "react"
import Card from 'react-bootstrap/Card';
import {clothes} from '../../data'
import ModalShowDetails from "../../action/ModalShowDetails";
import check from "../../assets/Desktop/Ícones/check-circle.png"
import { Row, Col, Form, Modal, CloseButton } from 'react-bootstrap';
import "./cardPrice.css"
export default function CardPrice (){
  const [modalShow, setModalShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // const imageCard = clothes.find((clothes) => clothes.id === selectedCard).imagem;
  // const titleCard = clothes.find((clothes) => clothes.id === selectedCard).title;
  // const textCard = clothes.find((clothes) => clothes.id === selectedCard).text;
  // const priceCard = clothes.find((clothes) => clothes.id === selectedCard).price;

  const handleOpen = (cardId) => {
      setSelectedCard(cardId);
      setModalShow(true)
  };
  const closeModal = () => {
    setModalShow(false);
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
         <h3>{clothes.title}</h3>
          <p>oii</p>
          <p>{clothes.find((clothes) => clothes.id === selectedCard).title}</p>
          <button onClick={() => setModalShow(false)}>Close</button>
         </div>
         </div>
      
      // <ModalShowDetails
      // show={modalShow}   
      // onHide={() => setModalShow(false)} />
      )}
    </>
    
    )
}