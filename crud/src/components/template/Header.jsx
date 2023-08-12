import React from "react";

import "./Header.css"

export default props => 
    <div className="cabecalho">
        <div className="title">
            <i className={`fa fa-${props.icon}`}></i>
            {props.title}
        </div>
        <div className="subtitle">
            Projeto em React, Punpun Love
        </div>
    </div>