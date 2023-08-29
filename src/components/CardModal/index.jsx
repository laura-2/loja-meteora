import React, {useState} from "react"
import {Form, Modal} from 'react-bootstrap';
import check from "../../assets/Desktop/Ícones/check-circle.png"
import close from "../../assets/Desktop/Ícones/Icon Color.png"
import style from "./cardModal.scss"
import {useCarrinhoContext} from "../../Context/Carrinho"
export default function CardModal ({id, title, imagem, text, price}){
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(modalOpen);
  };
  
  const {carrinho, adicionarProduto} = useCarrinhoContext()
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)
    return (
        <div className={style.modal}  onSubmit={(e) => e.preventDefault()}>
        <div className={style.modalContent}>
        <Modal.Header className={style.modalHeader}>
          <img src={check} alt='Icon check' className={style.modalIcon}/>
          <Modal.Title id="contained-modal-title-left" className={style.modalTitle}>
          Confira detalhes sobre o produto
          </Modal.Title>
            <img src={close} alt="Icon close" onClick={handleCloseModal}/>
        </Modal.Header>
        <Modal.Body>
          <div className={style.modalFlex}>
            <div>
              <img src={imagem} alt='imagem-modelo' className={style.modalImage}/>
            </div>
            <div>
                <Modal.Title className={style.modalPrice}>{title}</Modal.Title>
                <p className={style.modalText}>{text}</p>
                <hr/>
                <Modal.Title className={style.modalPrice}>{price}</Modal.Title>
                <p className={style.modalTextLight}>Vendido e entregue por Riachuelo</p>
                <hr/>
                <p className={style.modalTextColor}>Cores:</p>
                  <Form>
                  <label className={style.modalLabel}>
                  <input type="radio" name="myRadio" value="option1" className={style.modalInput}/>
                  Azul claro
                </label>
                <label className={style.modalLabel}>
                  <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                  Offwhite
                </label>
                <label className={style.modalLabel}>
                  <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                  Preto
                </label>
                  </Form>
                  <hr/>
                  <p className={style.modalTextColor}>Tamanho:</p>
                  <Form>
                    <label className={style.modalLabel}>
                      <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                      PP 
                    </label>
                    <label className={style.modalLabel}>
                      <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                      P
                    </label>
                    <label className={style.modalLabel}>
                      <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                      M
                    </label>
                    <label className={style.modalLabel}>
                    <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                      G
                    </label>
                    <label className={style.modalLabel}>
                      <input type="radio" name="myRadio" value="option1" className={style.modalInput} />
                      GG
                    </label>
                  </Form>

                  <button className={style.modalButton} onClick={()=>{
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