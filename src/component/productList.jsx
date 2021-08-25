import React,{useState, useEffect} from 'react'; 
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios'; 
import {Grid} from '@material-ui/core';

const ProductList = (props) => {

    const [loader, hideLoader] = useState(true);
    const [productList, setProductList] = useState([]);
    const history = useHistory();

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then(response=>{
        setProductList(response.data);
      }).catch(error=>{
        console.log(error,"==error");
      });

        setTimeout(() => {
          hideLoader(false);
        },1000);
      },[loader]);

      const viewDetails = (id) => { 
        history.push(`/product-details/${id}`);
      }

    return <Grid container justifyConter="center"> 
      <Grid row><h4 col={12} justifyContent={'center'} textAlign={'center'}>Product List</h4></Grid>
      <Grid container col={8}>
        {
            loader ? (
                <>
                <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                </>
              )  : (
                <>
                {productList.map((product,index) => {
                  return <Grid  md={2} spacing={3} style={{cursor: 'pointer',margin: '15px',padding: '15px',border: '1px dashed #000',}}>
                      <div >
                        <Grid>
                          <img src={product.image} alt={product.title} width={'100%'}/>
                          <p key={index}>Product Name : {product.title}</p>
                          <p>Product Category: {product.category}</p>
                          <button onClick={() => viewDetails(product.id)} >View Details</button>
                        </Grid>
                      </div>
                      </Grid>
                })}
                </>
            )
        }
        
      </Grid>
    </Grid>
}

export default ProductList