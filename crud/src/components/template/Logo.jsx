import React from "react";
import Logo from "../../assets/logo.png"
import "./Logo.css"

export default props => 
    <div className="logo">
            <a href="/home">
                <img src={Logo} alt="logo" />
            </a>
        </div>