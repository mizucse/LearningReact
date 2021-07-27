import React,{Component} from 'react';

class ProductList extends Component {
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
    render () {
        return <>
        {this.state.preloader ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
        
            ): (
            <div>
                {this.props.productlist.map((product) => {
                    return <>
                        <div onClick={() => this.props.selectProduct(product)} style={{cursor: 'pointer',margin: '15px 0',padding: '15px',border: '1px dashed #000',}}>
                            <p>Product Name: {product.name}</p>
                            <p>Product Category: {product.category}</p> 
                        </div> 
                    </>
                })}
            </div>
            )
        }
        </>
    }
}

export default ProductList;