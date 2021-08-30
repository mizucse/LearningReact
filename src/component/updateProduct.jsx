import React from 'react';
import {Grid} from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams} from 'react-router-dom';


const UpdateProduct = () => {
    const history = useHistory();
    const {id} = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        category: '',
        image: '',
        description: '',
    });

    const addProduct = (e,key) => {
       setProduct({...product,[key]: e.target.value})
    }
    useEffect(() => { 
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response)=>{
            // console.log(response.data, "===response in then");
                
            setProduct(response.data);

        }).catch((error)=>{
           console.log(error, "===response in catch")

        });
    },[]);

    const requestUpdateProduct = (id) => {
        axios.put(`https://fakestoreapi.com/products/${id}`,{
           title: product.title,
           price: product.price,
           category: product.category,
           image: product.image,
           description: product.description,
        })
        .then((response)=>{
            // console.log(response.data, "===response in then")
           history.push('/product-list');
        }).catch((error)=>{
           console.log(error, "===response in catch");
        });
    }

   return <>
       <Grid container justifyConter="center">
           <Grid container md={2}>
               <h4>Update Product</h4>
               <div style={{margin: '15px 0',padding: '15px'}}> 
                   <div>
                       <p>Product Name: </p>
                       <input value={product.title} onChange={e=> addProduct(e,'title')} />
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
                       <button onClick={() => requestUpdateProduct(product.id)}>Update</button> 
               </div>
           </Grid>
       </Grid>
   </>
}

export default UpdateProduct;