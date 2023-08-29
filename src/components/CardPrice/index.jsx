import React, {useState} from "react"
import {Col, Card} from 'react-bootstrap';
import "./cardPrice.css"
import CardModal from "../CardModal";
export default function CardPrice ({id, title, imagem, text, price}){
  const [modalOpen, setModalOpen] = useState(false);

  const handleVerMais = () => {
    setModalOpen(true);
  };

    return (
      <>
      <Col className="card">
        <Card className="cardImage">
        <Card.Img variant="top" className="cardImageBorder" src={imagem}/>
        <Card.Body>
        <Card.Title className="cardTitlePrice">{title}</Card.Title>
        <Card.Text className="cardText">
        {text}
        </Card.Text>
        <Card.Title className="cardTitlePrice">{price}</Card.Title>
        <button className="cardButton" onClick={handleVerMais}>Ver mais</button>
        </Card.Body>
        </Card>
        </Col>
            
      {modalOpen && (
        <CardModal/>
      )}
      
    </>
    
    )
}