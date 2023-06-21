import React from "react"
import Card from 'react-bootstrap/Card';
import Camisa from "../../assets/Desktop/Imagens Cards/Camiseta.png"
import Bolsa from "../../assets/Desktop/Imagens Cards/Bolsa.png"
import Calcado from "../../assets/Desktop/Imagens Cards/Tenis.png"
import Calca from "../../assets/Desktop/Imagens Cards/Calça.png"
import Casaco from "../../assets/Desktop/Imagens Cards/Jaqueta.png"
import Oculos from "../../assets/Desktop/Imagens Cards/óculos.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardPrice.css"

export default function CardPrice (){
    return (
      <>
      <h3 className="title">Produtos que estão bombando!</h3>
      <Row className="justify-content-md-center mb-4" xs="auto">
        <Col>
        <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={Camisa}/>
        <Card.Body>
        <Card.Title className="card-title-price">Camiseta Conforto</Card.Title>
        <Card.Text className="card-text">
        Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.
        </Card.Text>
        <Card.Title className="card-title-price">R$ 70,00</Card.Title>
        <button className="card-button">Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={Calca} />
        <Card.Body>
        <Card.Title className="card-title-price">Calça Alfaiataria</Card.Title>
        <Card.Text className="card-text">
        Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
        </Card.Text>
        <Card.Title className="card-title-price">R$ 180,00</Card.Title>
        <button className="card-button">Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={Calcado} />
        <Card.Body>
        <Card.Title className="card-title-price">Tênis Chunky</Card.Title>
        <Card.Text className="card-text">
        Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.
        </Card.Text>
        <Card.Title className="card-title-price">R$ 250,00</Card.Title>
        <button className="card-button">Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row className="justify-content-md-center mb-5" xs="auto">
      <Col>
      <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={Casaco} />
        <Card.Body>
        <Card.Title className="card-title-price">Jaqueta Jeans</Card.Title>
        <Card.Text className="card-text">
        Modelo unissex oversized com gola de camurça. Atemporal e autêntica!
        </Card.Text>
        <Card.Title className="card-title-price">R$ 150,00</Card.Title>
        <button className="card-button">Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={Oculos} />
        <Card.Body>
        <Card.Title className="card-title-price">Óculos Redondo</Card.Title>
        <Card.Text className="card-text">
        Armação metálica em grafite com lentes arredondadas. Sem erro!
        </Card.Text>
        <Card.Title className="card-title-price">R$ 120,00</Card.Title>
        <button className="card-button">Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={Bolsa} />
        <Card.Body>
        <Card.Title className="card-title-price">Bolsa coringa</Card.Title>
        <Card.Text className="card-text">
        Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!
        </Card.Text>
        <Card.Title className="card-title-price">R$ 120,00</Card.Title>
        <button className="card-button">Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      </>
    )
}