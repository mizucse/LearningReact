import logo from './logo.svg';
import './App.css';
import ProductDetail from './product_details';
import ProductList from './products'; 
import { Component } from 'react';

class App extends Component{
  state = {
    productListArray: [
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
    ],
    currnentProduct: null,
  }

  selectProduct = (data) => {
    this.setState({ ...this.state, currentProduct: data });
  }
  backToList = () => {
    this.setState({ ...this.state, currentProduct: null });
  }

  render(){
    // console.log(this.state.currentProduct, '====='); 
    
    return ( 
      <div style={{
          padding: '50px', 
          backgroundColor: '#ddd',
        }}> 

        {this.state.currentProduct ? (
          <ProductDetail currentProduct = {this.state.currentProduct} backToList = {this.backToList}/>
          ) : (
          <ProductList productlist={this.state.productListArray} selectProduct={this.selectProduct}/>
        )} 
    
      </div>
    );  
  }
}

export default App;
