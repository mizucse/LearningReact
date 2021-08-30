 import React from 'react';
 import {Grid} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


 const AddProduct = () => {
     const history = useHistory();
     const [product, setProduct] = useState({
         name: '',
         price: '',
         category: '',
         image: '',
         description: '',
     });

     const addProduct = (e,key) => {
        setProduct({...product,[key]: e.target.value})
     }
     const requestAddProduct = () => { 
         axios.post('https://fakestoreapi.com/products',{
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            description: product.description,
         })
         .then((response)=>{
            //  console.log(response.data, "===response in then")
            history.push('/product-list');
         }).catch((error)=>{
            console.log(error, "===response in catch")

         });
     }

    return <>
        <Grid container justifyConter="center">
            <Grid container md={2}>
                <h4>Add Product</h4>
                <div style={{margin: '15px 0',padding: '15px'}}> 
                    <div>
                        <p>Product Name: </p>
                        <input value={product.name} onChange={e=> addProduct(e,'name')}/>
                    </div>
                    <div>
                        <p>Product Category </p>
                        <input value={product.category} onChange={e=> addProduct(e,'category')}/>
                    </div>
                    <div>
                        <p>Product Price: </p>
                        <input value={product.price} onChange={e=> addProduct(e,'price')}/>
                    </div>
                    <div>
                        <p>Product Description:  </p>
                        <input value={product.description} onChange={e=> addProduct(e,'description')}/>
                    </div> 
                        <button onClick={() => requestAddProduct()}>Submit</button> 
                </div>
            </Grid>
        </Grid>
    </>
 }

 export default AddProduct;