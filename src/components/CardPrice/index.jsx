import React, {useState} from "react"
import {Col, Card} from 'react-bootstrap';
import style from "./cardPrice.scss"
import CardModal from "../CardModal";
export default function CardPrice ({id, title, imagem, text, price}){
  const [modalOpen, setModalOpen] = useState(false);

  const handleVerMais = () => {
    setModalOpen(true);
  };

    return (
      <>
      <Col className={style.card}>
        <Card className={style.cardImage}>
        <Card.Img variant="top" className={style.cardImageBorder} src={imagem}/>
        <Card.Body>
        <Card.Title className={style.cardTitlePrice}>{title}</Card.Title>
        <Card.Text className={style.cardText}>
        {text}
        </Card.Text>
        <Card.Title className={style.cardTitlePrice}>{price}</Card.Title>
        <button className={style.cardButton} onClick={handleVerMais}>Ver mais</button>
        </Card.Body>
        </Card>
        </Col>
            
      {modalOpen && (
        <CardModal/>
      )}
      
    </>
    
    )
}