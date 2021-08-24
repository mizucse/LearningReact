import './App.css';
import ProductList from './component/productList'; 
import ProductDetails from './component/prodductDetails';
import { useState, useEffect } from 'react';
import {  Switch, Route, Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import {Grid} from '@material-ui/core';




function App() {
  const params = useParams(); 
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loader, hideLoader] = useState(true);
 
  const selectProduct = (product) => {
    //console.log(product.category);
    setCurrentProduct(product);
  }
  
  const backToList = () => {
    setCurrentProduct(null);
  }

  useEffect(() => {
    setTimeout(() => {
      hideLoader(false);
    },1000);
  },[loader]);

  return ( 
    <Grid container justifyContent={'center'}> 
      <Grid col md={12} alignItems={'center'}>
        <Grid col md={6}>

          <Link to="/">Home</Link>&nbsp;
          <Link to="/product-list">Product List</Link> &nbsp;
          <Link to="/product-details">Product Details</Link> &nbsp;
        </Grid>
      </Grid>
        
      <Grid col={12}>

        <Switch>
          <Route exact path='/'>
            <h1 alignItems={"center"}>Welcome to Ecommerce home page</h1>
          </Route>
          <Route path='/product-list'>
            <ProductList />
          </Route>
          <Route path='/product-details/'>
            <ProductDetails />
          </Route>
          <Route path='*'>
            <h1 alignItems={"center"}>404</h1>
          </Route>
        </Switch>
      </Grid>
      {/* {
        loader ? (
          <>
          <div className="loader-container">
              <div className="loader"></div>
          </div>
          </>
        ) : (
          currentProduct ? <ProductDetails currentProduct={currentProduct} backToList = {backToList}/> :
          <>
          <ProductList products = {productListArray} selectProduct = {selectProduct}/>
          
          </>
        )
      } */}
    </Grid>
  );
}


export default App;
