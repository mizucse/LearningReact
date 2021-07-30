import React,{useState, useEffect} from 'react';

const ProductDetails = (props) => {

    const [loader, hideLoader] = useState(true);

    useEffect(() => {
      console.log(props.currentProductInfo) 
        setTimeout(() => {
          hideLoader(false);
        },1000);
      },[loader]);

    return <>
        {
            loader ? (
                <>
                <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                </>
              )  : (
                <>
                    <h4>Product Details</h4>
                    <div style={{margin: '15px 0',padding: '15px'}}>
                        <p>Product Name: {props.currentProductInfo.name}</p>
                        <p>Product Category: {props.currentProductInfo.category}</p>
                        <p>Product Price: {props.currentProductInfo?.price}</p>
                        <p>Product Description: {props.currentProductInfo?.description}</p>
                        <button onClick={props.backToList}>Back to list</button>
                    </div> 
                </>
              )
        }
    </>
}

export default ProductDetails