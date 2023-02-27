import './App.scss'
import React, {Fragment} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Clothes from "./components/Clothes/Clothes";
import ItemCard from "./components/Clothes/Item/ItemCard/ItemCard";

function App() {

    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/clothes" element={<Clothes/>}/>
                    <Route path="/accessories" element={<Clothes/>}/>
                    <Route path="/accessories/1" element={<ItemCard/>}/>
                </Route>
            </Routes>
        </Fragment>
    )
}

export default App
