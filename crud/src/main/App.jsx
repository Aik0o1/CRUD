import React from "react"
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav"
import Routes from "./Routes"
import Footer from "../components/template/Footer";

export default props => 
    <BrowserRouter>
        <div className="app">
                <Logo/>
                <Routes/>
                <Nav/>
                <Footer/>
            </div>
    </BrowserRouter>        
