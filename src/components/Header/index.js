import React , {useState} from "react";
import LogoDesktop from "../../assets/Desktop/Logo desktop.png"
import Menu from "../../assets/Mobile/Ícones/Icon Color.png"
import Close from "../../assets/Mobile/Ícones/marca-cruzada 1.png"
import {Button, Container, Form, Nav, Navbar, Image} from 'react-bootstrap';
import "./header.css"
export default function Header(){
    const [menu, setMenu] = useState(false);
    const menuOpen = () => {
        setMenu(!menu)
    }
    
    return (
        <>
            <Navbar className="header">
            <Container fluid>
                <Image src={LogoDesktop}/>
                <Nav
                    className="me-auto my-2 my-lg-0 header-tablet"
                >
                    <Nav.Link href="#action1" className="header-link">Home</Nav.Link>
                    <Nav.Link href="#action2" className="header-link">Nossas lojas</Nav.Link>
                    <Nav.Link href="#action2" className="header-link">Novidades</Nav.Link>
                    <Nav.Link href="#action2" className="header-link">Promoções</Nav.Link>
                </Nav>
                <Image src={Menu} onClick={menuOpen} className="menu-open"/>
                {menu && (
                    <Nav
                        className="header-mobile header-menu-links"
                    >
                        <Image src={Close} className="header-menu-close" onClick={menuOpen}/>
                        <Nav.Link href="#action1" className="header-link link-color">Home</Nav.Link>
                        <hr className="header-link-color"/>
                        <Nav.Link href="#action2" className="header-link">Nossas lojas</Nav.Link>
                        <hr className="header-link-color"/>
                        <Nav.Link href="#action2" className="header-link">Novidades</Nav.Link>
                        <hr className="header-link-color"/>
                        <Nav.Link href="#action2" className="header-link">Promoções</Nav.Link>
                    </Nav>
                )}
                <Form className="d-flex header-search">
                    <Form.Control
                    type="search"
                    placeholder="Digite o produto"
                    className="me-2 header-input"
                    id="text"
                    aria-label="Search"
                    autoComplete="off"
                    />
                    <Button className="header-button" variant="dark">Buscar</Button>
                </Form>
            </Container>
            </Navbar>
            <Form className="d-flex header-search-mobile">
                    <Form.Control
                    type="search"
                    placeholder="Digite o produto"
                    className="me-2 header-input-mobile"
                    aria-label="Search"
                    id="search"
                    autoComplete="off"
                    />
                    <Button className="header-button-mobile" variant="link">Buscar</Button>
                </Form>
            </>
    )
}