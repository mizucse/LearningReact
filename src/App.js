import logo from './logo.svg';
import './App.css';
import ProductDetail from './product_details';
import ProductList from './products'; 
import { Component } from 'react';


class App extends Component{
  state = {
    productListArray: [
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
    this.setState({...this.state, preloader: false})
  }

  
  componentDidMount(){
    // alert(this.state.preloader);
    setTimeout(() => {
      this.setState({...this.state, preloader: false});
    }, 1000);
    
    console.log("Component is Mounted(DidMount)");
  }
  componentDidUpdate (){  
    console.log('component is updated(didUpdate)'); 
  }
  componentWillUnmount (){ 
    console.log('component is unmounted(willUnmount)');
  }

  render(){ 
    console.log('Component is Mounted inside render'); 
     
    return ( 
      <> 
      
      {this.state.preloader ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
      
          ): (
            <>
            {this.state.currentProduct ? (
              <ProductDetail currentProduct = {this.state.currentProduct} backToList = {this.backToList}/>
              ) : (
              <ProductList productlist={this.state.productListArray} selectProduct={this.selectProduct}/>
            )} 
            </>
          )
          
        }
      </>
    );  
  }
}


export default App;
