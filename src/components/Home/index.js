import CardPrice from "../CardPrice";
import CardSmall from "../CardSmall";
import Banner from "../Carousel";
import Header from "../Header";
import FooterPage from "../Footer";
import React from "react";
import {clothing} from "../../store/data"

export default function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <CardSmall/>
            <h3 className="title">Produtos que estão bombando!</h3>
            <div className="card-list">
            <div className="row">
            {clothing.map((clothes, index) => (
        <CardPrice key={index} title={clothes.title} imagem={clothes.imagem} text={clothes.text} price={clothes.price}/>
      ))}
      </div>
      </div>
            <FooterPage/>
        </>
    )
}