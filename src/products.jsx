import React,{Component} from 'react';

class ProductList extends Component {
    render () {
        return <div>
            {this.props.productlist.map((product) => {
                return <>
                    <div onClick={() => this.props.selectProduct(product)} style={{cursor: 'pointer',margin: '15px 0',padding: '15px',border: '1px dashed #000',}}>
                        <p>Product Name: {product.name}</p>
                        <p>Product Category: {product.category}</p> 
                    </div> 
                </>
            })}
        </div>
    }
}

export default ProductList;