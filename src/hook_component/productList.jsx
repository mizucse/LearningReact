import React,{useState, useEffect} from 'react';

const ProductList = (props) => {

    const [loader, hideLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          hideLoader(false);
        },1000);
      },[loader]);

    return <> 
        {
            loader ?(
                <>
                <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                </>
              )  : (
                <>
                <h4>Product List</h4>
                {props.products.map((product) => { 
                  return <>
                      <div onClick={() => props.selectProduct(product)} style={{cursor: 'pointer',margin: '15px 0',padding: '15px',border: '1px dashed #000',}}>
                          <p>Product Name: {product.name}</p>
                          <p>Product Category: {product.category}</p> 
                      </div>
                      </>
                })}
                </>
            )
        }
        
    </>
}

export default ProductList