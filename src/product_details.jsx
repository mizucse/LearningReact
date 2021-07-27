import React,{Component} from 'react';

class ProductDetails extends Component {
  state = {
    preloader: true
  }

  componentDidMount(){
    // alert(this.state.preloader);
    setTimeout(() => {
      this.setState({...this.state, preloader: false});
    }, 1000);
    
    console.log("Component is Mounted(DidMount)");
  }
    render(){
        return <>
        {this.state.preloader ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
      
          ): (
            <div style={{margin: '15px 0',padding: '15px'}}>
                <p>Product Name: {this.props.currentProduct?.name}</p>
                <p>Product Category: {this.props.currentProduct?.category}</p>
                <p>Product Price: {this.props.currentProduct?.price}</p>
                <p>Product Description: {this.props.currentProduct?.description}</p>
                <button onClick={this.props.backToList}>Back to list</button>
            </div> 
          )
        }
        </>
    } 
} 

export default ProductDetails;
 