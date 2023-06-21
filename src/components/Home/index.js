import CardPrice from "../CardPrice";
import CardSmall from "../CardSmall";
import Banner from "../Carousel";
import Header from "../Header";
import FooterPage from "../Footer";
import React from "react";

export default function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <CardSmall/>
            <CardPrice/>
            <FooterPage/>
        </>
    )
}