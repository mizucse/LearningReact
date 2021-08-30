import React,{useState, useEffect} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import {Grid} from '@material-ui/core';

const ProductDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    
    const [loader, hideLoader] = useState(true);
    const [currentProduct, setCurrentProduct] = useState();
        
    useEffect(() => { 
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>{
            setCurrentProduct(response.data); 
            console.log(loader);
        }).catch(error=>{
            console.log(error,"==error");
        });
        setTimeout(() => { hideLoader(false); },1000);

        // setCurrentProduct(list.find(product => product.key === parseInt(productId.id, 10)));
      },[]);

      const backToList = ()=> {
          history.push("/product-list");
      }

      const updateProduct = (id)=> {
          history.push(`/update-product/${id}`);
      }

      const deleteProduct = (id)=> {
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            //setCurrentProduct(response.data); 
            console.log(response.data);
            history.push("/product-list");
        }).catch(error=>{
            console.log(error,"==error");
        }); 
      }

    return <>
        {
            loader ? (
                <>
                <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                </>
              )  : (
                <Grid container justifyConter="center">
                    <Grid container md={2}>
                        <h4>Product Details</h4>
                        <div style={{margin: '15px 0',padding: '15px'}}>
                            <img src={currentProduct?.image}/>
                            <p>Product Name: {currentProduct?.title}</p>
                            <p>Product Category: {currentProduct?.category}</p>
                            <p>Product Price: {currentProduct?.price}</p>
                            <p>Product Description: {currentProduct?.description}</p>
                            <button onClick={(() => updateProduct(currentProduct.id))}>Update Product</button>
                            <button onClick={(() => deleteProduct(currentProduct.id))}>Delete Product</button>
                            <button onClick={(() => backToList())}>Back to list</button>
                        </div> 
                    </Grid>
                </Grid>
              )
        }
    </>
}

export default ProductDetails