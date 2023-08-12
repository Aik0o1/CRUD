import React from "react"
import Header from "../template/Header"

import img1 from "./assets/img1.jpg"
import "./Home.css"

export default props => 
    <React.Fragment>
        <Header icon="home" title=" Início"/>        
        <div className="content-home">
            <div className="text">
                <p>Você é fã de Oyasumi Punpun? Se cadastre aqui para conhecermos você!</p>
            </div>
            <div className="box-img">
                <img src={img1} alt="adsds" />
            </div>
        </div>

    </React.Fragment>

