import React, {useState} from "react"
import Card from 'react-bootstrap/Card';
import Camisa from "../../assets/Desktop/Imagens Cards/Camiseta.png"
import Bolsa from "../../assets/Desktop/Imagens Cards/Bolsa.png"
import Calcado from "../../assets/Desktop/Imagens Cards/Tenis.png"
import Calca from "../../assets/Desktop/Imagens Cards/Calça.png"
import Casaco from "../../assets/Desktop/Imagens Cards/Jaqueta.png"
import Oculos from "../../assets/Desktop/Imagens Cards/óculos.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalShowDetails from "../../action/ModalShowDetails";
import "./cardPrice.css"
export default function CardPrice (){
  const [modalShow, setModalShow] = useState(false);

  const clothes = {
    camisa: {
      imagem: Camisa,
      title: 'Camiseta Conforto',
      text: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
      price: 'R$ 70,00'
    },
    bolsa: {
      imagem: Bolsa,
      title: 'Bolsa coringa',
      text: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
      price: 'R$ 120,00'
    },
    calcado: {
      imagem: Calcado,
      title: 'Tênis Chunky',
      text: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
      price: 'R$ 250,00'
    },
    calca: {
      imagem: Calca,
      title: 'Calça Alfaiataria',
      text: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
      price: 'R$ 180,00'
    },
    casaco: {
      imagem: Casaco,
      title: 'Jaqueta Jeans',
      text: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
      price: 'R$ 150,00'
    },
    oculos: {
      imagem: Oculos,
      title: 'Óculos Redondo',
      text: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
      price: 'R$ 120,00'
    }
  }
    return (
      <>
      <h3 className="title">Produtos que estão bombando!</h3>
      <Row className="justify-content-md-center mb-4" xs="auto">
        <Col>
        <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={clothes.camisa.imagem}/>
        <Card.Body>
        <Card.Title className="card-title-price">{clothes.camisa.title}</Card.Title>
        <Card.Text className="card-text">
        {clothes.camisa.text}
        </Card.Text>
        <Card.Title className="card-title-price">{clothes.camisa.price}</Card.Title>
        <button className="card-button" onClick={console.log('oiiii')}>Ver mais</button>
      </Card.Body>
      <ModalShowDetails show={modalShow} data={clothes} onHide={() => setModalShow(false)} />
      </Card>
      </Col>
      <Col>
      <Card className="card-image">
        <Card.Img variant="top" className="card-image-border" src={clothes.calca.imagem} />
        <Card.Body>
        <Card.Title className="card-title-price">{clothes.calca.title}</Card.Title>
        <Card.Text className="card-text">
        {clothes.calca.text}
        </Card.Text>
        <Card.Title className="card-title-price">{clothes.calca.price}</Card.Title>
        <button className="card-button" onClick={() => setModalShow(true)}>Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image calcado-card">
        <Card.Img variant="top" className="card-image-border" src={clothes.calcado.imagem} />
        <Card.Body>
        <Card.Title className="card-title-price">{clothes.calcado.title}</Card.Title>
        <Card.Text className="card-text">
        {clothes.calcado.text}
        </Card.Text>
        <Card.Title className="card-title-price">{clothes.calcado.price}</Card.Title>
        <button className="card-button" onClick={() => setModalShow(true)}>Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row className="justify-content-md-center mb-5" xs="auto">
      <Col>
      <Card className="card-image jacket-card">
        <Card.Img variant="top" className="card-image-border" src={clothes.casaco.imagem} />
        <Card.Body>
        <Card.Title className="card-title-price">{clothes.casaco.title}</Card.Title>
        <Card.Text className="card-text">
        {clothes.casaco.text}
        </Card.Text>
        <Card.Title className="card-title-price">{clothes.casaco.price}</Card.Title>
        <button className="card-button" onClick={() => setModalShow(true)}>Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image oculos-card">
        <Card.Img variant="top" className="card-image-border" src={clothes.oculos.imagem} />
        <Card.Body>
        <Card.Title className="card-title-price">{clothes.oculos.title}</Card.Title>
        <Card.Text className="card-text">
        {clothes.oculos.text}
        </Card.Text>
        <Card.Title className="card-title-price">{clothes.oculos.price}</Card.Title>
        <button className="card-button" onClick={() => setModalShow(true)}>Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card className="card-image bolsa-card">
        <Card.Img variant="top" className="card-image-border" src={clothes.bolsa.imagem} />
        <Card.Body>
        <Card.Title className="card-title-price">{clothes.bolsa.title}</Card.Title>
        <Card.Text className="card-text">
        {clothes.bolsa.text}
        </Card.Text>
        <Card.Title className="card-title-price">{clothes.bolsa.price}</Card.Title>
        <button className="card-button" onClick={() => setModalShow(true)}>Ver mais</button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      </>
    )
}