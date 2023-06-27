import React, { useState } from "react";
import Arrow from "../../assets/Desktop/Ícones/arrow-repeat (2).png";
import Flower from "../../assets/Desktop/Ícones/flower1 (3).png";
import Diamond from "../../assets/Desktop/Ícones/x-diamond (2).png";
import check from "../../assets/Desktop/Ícones/check-circle.png"
import close from "../../assets/Desktop/Ícones/Icon Color.png"
import { Modal } from "react-bootstrap";
import "./footer.css";
export default function FooterPage(){
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
            <footer style={{marginBottom: "-20px"}}>
                <section className="footer-section-icons">
                    <h4 className="footer">Conheça todas as nossas facilidades</h4>
                    <div className="footer-divs">
                        <div className="footer-flex">
                            <img src={Diamond} alt="Diamond Icon" className="footer-section-image"/>
                            <div className="footer-div">
                                <h2 className="footer-div-title">PAGUE PELO PIX</h2>
                                <p className="footer-div-text">Ganhe 5% OFF em pagamentos via PIX</p>
                            </div>
                        </div>
                        <div className="footer-flex">
                            <img src={Arrow} alt="Arrow Icon" className="footer-section-image"/>
                            <div className="footer-div">
                                <h2 className="footer-div-title">TROCA GRÁTIS</h2>
                                <p className="footer-div-text">Fique livre para trocar em até 30 dias.</p>
                            </div>
                        </div>
                        <div className="footer-flex flower-margin">
                            <img src={Flower} alt="Flower Icon" className="footer-section-image"/>
                            <div className="footer-div">
                                <h2 className="footer-div-title">SUSTENTABILIDADE</h2>
                                <p className="footer-div-text">Moda responsável, que respeita o meio ambiente.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-section-email">
                    <h5 className="footer-section-email-text">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h5>
                    <div className="footer-email-flex">
                        <input placeholder="Digite seu email" type="text" id="email" required className="footer-section-input"></input>
                        <button className="footer-section-button" onClick={()=> setModalOpen(true)}>Enviar</button>
                        {modalOpen && (
                            <div className="modal">
                            <div className="modal-content">
                                <Modal.Header className="modal-header">
                                <img src={check} alt='Icon check' className="modal-icon"/>
                                <Modal.Title id="contained-modal-title-left" className="modal-title">
                                E-mail cadastrado com sucesso!
                                </Modal.Title>
                                    <img src={close} alt="Icon close" onClick={() => setModalOpen(!modalOpen)}/>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Em breve você receberá novidades exclusivas da Meteora.</p>
                                </Modal.Body>
                            </div>
                            </div>
                        )}
                    </div>
                </section>
                <section className="footer-alura">
                    <p className="footer-alura-text">2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
                </section>
            </footer>               
    )
}