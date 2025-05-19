import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProduct = () => {

    const {id} = useParams();

    const [product, setProduct] = useState();

    const getProductDetail = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data)
        })
    };
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Dettaglio prodotto</h1>
                </div>
                <div className="col-12">
                    <img src={product.image} alt="" className="fixed-dim-img" />
                    <h2>{product.title}</h2>
                    <p>{product.price}euro</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;