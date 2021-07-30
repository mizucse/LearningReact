import './App.css';
import ProductList from './hook_component/productList'; 
import ProductDetails from './hook_component/prodductDetails';
import { useState, useEffect } from 'react';
import Contact from './contact';

function App() {
  const [productListArray] = useState(
    [
      {
        name: 'HP Pavilion g4',
        description: 'Lorem Ipsum Laptop Description',
        price: '35000',
        category: 'Laptop',
      },
      {
        name: 'Keyboard',
        description: 'Lorem Ipsum keyboard Description',
        price: '1000',
        category: 'Accessories',
      },
      {
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
    setCurrentProduct({...currentProduct, currentProduct: product});
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
    <> 
      {/* <Contact pageName={"Contact Page"}/> */}
      {
        loader ? (
          <>
          <div className="loader-container">
              <div className="loader"></div>
          </div>
          </>
        ) : (
          currentProduct ? <ProductDetails currentProductInfo={currentProduct} backToList = {backToList}/> :
          <>
          <ProductList products = {productListArray} selectProduct = {selectProduct}/>
          
          </>
        )
      }
    </>
  );
}


export default App;
