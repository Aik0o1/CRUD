import React from "react";

import "./Nav.css" 
import afroGod from "../../assets/afroGod.png"

export default props =>
    <div className="navegacao">
        <ul>
            <li>
                <a href="/home">
                <i className="fa fa-home"></i> Início
                </a>
            </li>
            <li>
                <a href="users"> 
                    <i className="fa fa-users"></i> Users
                </a>
            </li>
        </ul>
        <div className="afroGod-box">
            <img className="img-afro" src={afroGod} alt="afro God" />
            <img className="img-afro" src={afroGod} alt="afro God" />
        </div>

    </div>