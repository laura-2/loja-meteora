import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/Desktop/Banner carousel 1 _ 1440 (1).png";
import banner2 from "../../assets/Desktop/Banner carousel 2 _ 1440 (1).png";
import banner3 from "../../assets/Desktop/Banner carousel 3 _ 1440 (1).png";
import banner1Mobile from "../../assets/Mobile/Banner carousel 1 _ 375.png";
import banner2Mobile from "../../assets/Mobile/Banner carousel 2 _ 375.png";
import banner3Mobile from "../../assets/Mobile/Banner carousel 3 _ 375.png"
import "./banner.css"

export default function Banner(){
    const widthScreen = window.screen.width;
    const getWidth = (event) => {
        event.preventDefault()
        if (widthScreen <= 768){
            return true
        } else {
            return false
        }
    }
    return(
    <Carousel indicators={getWidth}>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100 banner-image"
            src={widthScreen <= 375 ? banner1Mobile : banner1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100 banner-image"
            src={widthScreen <= 375 ? banner2Mobile : banner2}
            alt="Second slide"
            />
            <Carousel.Caption className="banner-caption">
            <h3 className="banner-title">COLEÇÃO ATEMPORAL</h3>
            <p className="banner-subtitle">Estilo e qualidade para durar.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 banner-image"
            src={widthScreen <= 375 ? banner3Mobile : banner3}
            alt="Third slide"
            />
            <Carousel.Caption className="banner-caption-left">
            <h3 className="banner-title">COLEÇÃO ATEMPORAL</h3>
            <p className="banner-subtitle">Alto impacto visual, baixo impacto ambiental!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}