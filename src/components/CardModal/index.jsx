import React, {useState} from "react"
import {Form, Modal} from 'react-bootstrap';
import check from "../../assets/Desktop/Ícones/check-circle.png"
import close from "../../assets/Desktop/Ícones/Icon Color.png"
import "./cardModal.css"
import {useCarrinhoContext} from "../../Context/Carrinho"
export default function CardModal ({id, title, imagem, text, price}){
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(modalOpen);
  };
  
  const {carrinho, adicionarProduto} = useCarrinhoContext()
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)
    return (
        <div className="modal"  onSubmit={(e) => e.preventDefault()}>
        <div className="modal-content">
        <Modal.Header className="modal-header">
          <img src={check} alt='Icon check' className="modal-icon"/>
          <Modal.Title id="contained-modal-title-left" className="modal-title">
          Confira detalhes sobre o produto
          </Modal.Title>
            <img src={close} alt="Icon close" onClick={handleCloseModal}/>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-flex">
            <div>
              <img src={imagem} alt='imagem-modelo' className="modal-image"/>
            </div>
            <div>
                <Modal.Title className="modal-price">{title}</Modal.Title>
                <p className="modal-text">{text}</p>
                <hr/>
                <Modal.Title className="modal-price">{price}</Modal.Title>
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

                  <button className="modal-button" onClick={()=>{
                    adicionarProduto({id, title, imagem, text, price})
                  }}>Adicionar à sacola</button>
                  {produtoNoCarrinho?.quantidade || 0}
              </div>
            </div>
          </Modal.Body>
       </div>
       </div>
    
    )
}