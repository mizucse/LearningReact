import React,{useState, useEffect} from 'react'; 
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const [loader, hideLoader] = useState(true);
    const [productList, setProductList] = useState([]);
    const history = useHistory();

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products').then(response=>{}).catch(error=>{});

      
        setTimeout(() => {
          hideLoader(false);
        },1000);
      },[loader]);

      const viewDetails = (id) => { 
        history.push(`/product-details/${id}`);
      }

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
                <h4>Product List</h4>
                {props.products.map((product) => { 
                  console.log(product)
                  return <>
                      <div onClick={() => viewDetails(product.id)} style={{cursor: 'pointer',margin: '15px 0',padding: '15px',border: '1px dashed #000',}}>
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