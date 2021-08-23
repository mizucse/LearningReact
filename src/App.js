import './App.css';
import ProductList from './component/productList'; 
import ProductDetails from './component/prodductDetails';
import { useState, useEffect } from 'react';
import {  Switch, Route, Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
// import { Grid } from './node_modules/@material-ui/core';


function App() {
  const params = useParams();
  console.log(params,"params====")
  const [productListArray] = useState(
    [
      {
        id: 1,
        name: 'HP Pavilion g4',
        description: 'Lorem Ipsum Laptop Description',
        price: '35000',
        category: 'Laptop',
      },
      {
        id: 2,
        name: 'Keyboard',
        description: 'Lorem Ipsum keyboard Description',
        price: '1000',
        category: 'Accessories',
      },
      {
        id: 3,
        name: 'Mouse',
        description: 'Lorem Ipsum Mouse Description',
        price: '500',
        category: 'Accessories',
      },
    ]
  );
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
    <div>  
      {/* <Link to="/product-list">Home</Link> */}
      <Switch>
        <Route exact path='/'>
          <ProductList products = {productListArray}/>
        </Route>
        <Route path='/product-details/'>
          <ProductDetails list = {productListArray}/>
        </Route>
        <Route path='*'>
          <h1 className="text-center">404</h1>
        </Route>
      </Switch>
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
    </div>
  );
}


export default App;
