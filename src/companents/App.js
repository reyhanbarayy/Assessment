import React, { useState } from "react";
import Product from "./Product";
import SelectedProduct from "./SelectedProduct";
import SideBar from "./SideBar";
import HomePage from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleChange = event => {
        setSelectedCategory(event);
    };

    const Click = event => {
        setSelectedProduct(event)
    }
    console.log(selectedProduct)
    return (

        <div className="ui container">
            <div style={{backgroundColor: "lightblue", height:120}}>
                <h1 style={{color:"white"}} className="ui right floated header">Product</h1>
                </div>
            
            
            <BrowserRouter>
            <SideBar handleChange={handleChange} />
                <Routes>
                    <Route path="/products" element={<Product selectedCategory={selectedCategory} Click={Click} />}></Route>
                    <Route path="/product" element={<SelectedProduct selectedProduct={selectedProduct} />}> </Route>
                    <Route path="/" element={<HomePage Click={Click} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
};

export default App;