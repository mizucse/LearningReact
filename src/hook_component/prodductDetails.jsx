import React,{useState, useEffect} from 'react';

const ProductDetails = (props) => {
    return <>
        <h4>Product Details</h4>
        <div style={{margin: '15px 0',padding: '15px'}}>
            <p>Product Name: {this.props.currentProduct?.name}</p>
            <p>Product Category: {this.props.currentProduct?.category}</p>
            <p>Product Price: {this.props.currentProduct?.price}</p>
            <p>Product Description: {this.props.currentProduct?.description}</p>
            <button onClick={this.props.backToList}>Back to list</button>
        </div> 
    </>
}

export default ProductDetails