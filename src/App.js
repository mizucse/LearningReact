import './App.css';
import ProductList from './hook_component/productList'; 
import ProductDetails from './hook_component/prodductDetails';
import { useState, useEffect } from 'react';
import Contact from './contact';

function App() {
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
  // const [loader, hideLoader] = true;
  const [currentProduct, setCurrentProduct] = useState('');
 
  const selectProduct = () => {
    
  }
     
  return ( 
    <> 
      {/* <Contact pageName={"Contact Page"}/> */}
      {
        <>
        <ProductList products = {productListArray}/>
        <ProductDetails />
        </>
      }
    </>
  );   
}


export default App;
