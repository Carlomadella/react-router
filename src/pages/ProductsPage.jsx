import React from "react";
import MainNavbar from "../components/MainNavbar";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsPage = () => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products').then((resp) => {
            setProducts(resp.data)
        });
    };

    useEffect(() =>{
        getProducts()
    }, [])

    return(
        <div>
            <MainNavbar />
            <h1>Elenco prodotti</h1>
            <div className="container">
                <div className="row g-4">
                    {products.map((product) => (
                        <div key={product.id} className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-image-top">
                                    <img src={product.image} alt={product.title} className="img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h3>{product.title}</h3>
                                    <p>{product.category}</p>
                                    <p>{product.price}euro</p>
                                </div>
                            </div>
                        </div>   
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsPage