import React, {useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";


const ProductList = (props) => {

    const {product, setProduct} = props

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res)
                console.log(res.data)
                // console.log('Product Propj=' + product)
                setProduct(res.data)
                // console.log('Product Propj=' + product)
            })
            .catch(err => console.log(err))
    }, [])

    const destroyProduct = (productIDFromBelow) => {

        axios.delete(`http://localhost:8000/api/products/${productIDFromBelow}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                // Can pass index with parameters as well as ((prod, index) => prod._id...)
                setProduct(product.filter(prod => prod._id !== productIDFromBelow))
            })
    }
    return (  
        <div>
            {
                product.map((prod, index) => (
                    <div key={index}>
                        <Link to={`/products/${prod._id}`}>{prod.title}</Link> 
                        | 
                        <Link to={`/products/edit/${prod._id}`}>Edit</Link>
                        |
                        <button onClick={()=> {destroyProduct(prod._id)}}>Delete</button>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default ProductList;