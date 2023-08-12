import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "../components/home/Home";
import Users from "../components/users/Users";

export default props => (
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/users" element={<Users/>}></Route>
        <Route exact path="*" element={<Home/>}></Route>
    </Routes>
)