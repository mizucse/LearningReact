import React,{useState, useEffect} from 'react';

const ProductList = (props) => {
    return <> 
        <h4>Product List</h4>
        {props.products.map((product) => {
            return <>
                <div onClick={() => props.selectProduct(product)} style={{cursor: 'pointer',margin: '15px 0',padding: '15px',border: '1px dashed #000',}}>
                    <p>Product Name: {product.name}</p>
                    <p>Product Category: {product.category}</p> 
                </div> 
            </>
        })}
    </>
}

export default ProductList