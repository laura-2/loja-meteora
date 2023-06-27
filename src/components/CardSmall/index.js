import React from "react"
import {Card, Row, Col} from 'react-bootstrap';
import Camisa from "../../assets/Desktop/Categorias/Categoria camiseta.png"
import Bolsa from "../../assets/Desktop/Categorias/Categoria Bolsa.png"
import Calcado from "../../assets/Desktop/Categorias/Categoria Calçados.png"
import Calca from "../../assets/Desktop/Categorias/Categoria calça.png"
import Casaco from "../../assets/Desktop/Categorias/Categoria casacos.png"
import Oculos from "../../assets/Desktop/Categorias/Categoria óculos.png"
import "./cardSmall.css"

export default function CardSmall (){
    return (
      <>
      <h3 className="category">Busque por categoria:</h3>
      <Row className="justify-content-md-center" xs="auto">
        <Col>
        <Card className="category-section margin-camisa">
        <Card.Img variant="top" src={Camisa} className="category-image"/>
        <Card.Body className="category-body">
          <Card.Text className="category-text">
            Camisetas
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="category-section">
        <Card.Img variant="top" src={Bolsa} className="category-image"/>
        <Card.Body className="category-body">
          <Card.Text className="category-text">
            Bolsas
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="category-section margin-tablet">
        <Card.Img variant="top" src={Calcado} className="category-image"/>
        <Card.Body className="category-body">
          <Card.Text className="category-text">
            Calçados
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="category-section">
        <Card.Img variant="top" src={Calca} className="category-image"/>
        <Card.Body className="category-body">
          <Card.Text className="category-text">
            Calças
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="category-section">
        <Card.Img variant="top" src={Casaco} className="category-image"/>
        <Card.Body className="category-body">
          <Card.Text className="category-text">
            Casacos
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="category-section">
        <Card.Img variant="top" src={Oculos} className="category-image"/>
        <Card.Body className="category-body">
          <Card.Text className="category-text">
            Óculos
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </>
    )
}