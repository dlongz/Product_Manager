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
                console.log(res.data)
                console.log('Product Propj=' + product)
                setProduct(res.data)
                console.log('Product Propj=' + product)
            })
            .catch(err => console.log(err))
    }, [])

    return (  
        <div>
            {
                product.map((prod, index) => (
                    <div key={index}>
                        <p><Link to={`/products/${prod._id}`}>{prod.title}</Link></p>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default ProductList;