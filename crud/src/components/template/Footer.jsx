import React from "react";
import "./Footer.css"
import punpun from "../../assets/punpun-chuva.png"

export default props => 
    <div className="footer">
        <div className="social">
            <a target={'_blank'} href="https://github.com/Aik0o1">
                <i className="fa fa-github"></i>
                GitHub
            </a>

            <a target={'_blank'} href="https://www.linkedin.com/in/victor-jos%C3%A9-pires-sena-30b0aa25a">
                <i className="fa fa-linkedin"></i>
                LinkedIn
            </a>
        </div>

        <div className="developed">
            <span>Desenvolvido por Aik01</span>
            <img src={punpun} alt="" />
        </div>
    </div>