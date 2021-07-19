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
    preloader: true, 
  }

  demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  selectProduct = (data) => {
    this.setState({ ...this.state, currentProduct: data });
  }
  backToList = () => {
    this.setState({ ...this.state, currentProduct: null });
  }

  preloader_effect = (show) => {
    this.setState({...this.state, preloader: show})
  }

  
  componentDidMount(){
    // alert(this.state.preloader);
    
    console.log("Component is Mounted");
  }
  componentDidUpdate (){
    console.log('component is updated');
  }
  componentWillUnmount (){
    console.log('component is unmounted');
  }

  render(){ 
    console.log('Component is Mounted inside render'); 
     
    return ( 
      <> 
      {/* <div class="loader-container">
        <div class="loader"></div>
      </div> */}
 
          <div onLoad = {this.preloader_effect}  style={{
              padding: '50px', 
              backgroundColor: '#ddd',
            }}>
            
            {this.state.currentProduct ? (
              <ProductDetail currentProduct = {this.state.currentProduct} backToList = {this.backToList}/>
              ) : (
              <ProductList productlist={this.state.productListArray} selectProduct={this.selectProduct}/>
            )} 
        
          </div> 
      </>
    );  
  }
}


export default App;
