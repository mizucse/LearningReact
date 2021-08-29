import './App.css';
import ProductList from './component/productList'; 
import ProductDetails from './component/prodductDetails';
import AddProduct from './component/addProduct';
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
      <Grid col md={12} justifyContent={'center'}>
        <Grid col md={12} >
          <Link to="/">Home</Link>&nbsp;
          <Link to="/product-list">Product List</Link> &nbsp;
          <Link to="/product-details">Product Details</Link> &nbsp;
          <Link to="/add-product">Add New Product</Link> &nbsp;
        </Grid>
      </Grid>
        
      <Grid col={12}>

        <Switch>
          <Route exact path='/'>
            <h1 alignItems={"center"}>Welcome to Ecommerce home page</h1>
          </Route>
          <Route exact path='/product-list'>
            <ProductList />
          </Route>
          <Route exact path='/product-details/:id'>
            <ProductDetails />
          </Route>
          <Route exact path='/add-product/'>
            <AddProduct />
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
