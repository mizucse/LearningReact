import React,{useState, useEffect} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const ProductDetails = ({list}) => {
    const productId = useParams();
    const history = useHistory();
    
    const [loader, hideLoader] = useState(true);
    const [currentProduct, setCurrentProduct] = useState();
    
    console.log(productId.id,"intProId");
    
    useEffect(() => { 
        setTimeout(() => { hideLoader(false); },1000);

        setCurrentProduct(list.find(product => product.key === parseInt(productId.id, 10)));
      },[]);

      const backToList = ()=> {
          history.push("/");
      }
        console.log(currentProduct,'==currentProduct')

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
                        <p>Product Name: {currentProduct?.name}</p>
                        <p>Product Category: {currentProduct?.category}</p>
                        <p>Product Price: {currentProduct?.price}</p>
                        <p>Product Description: {currentProduct?.description}</p>
                        <button onClick={(() => backToList())}>Back to list</button>
                    </div> 
                </>
              )
        }
    </>
}

export default ProductDetails