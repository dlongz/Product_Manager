import React, {useState } from "react";
import axios from 'axios'

const ProductForm = (props) => {

    const [title, setTitle ] = useState("")
    const [price, setPrice ] = useState("")
    const [description, setDescription ] = useState("")

    const {product, setProduct} = props

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res)
            console.log(res.data)
            console.log(res.data)
            console.log('Product Propj=',product)
            setProduct([...product, res.data])
            // setProduct((prevState) => (
            //     [...prevState, res.data.item]
            // ))

            setTitle("")
            setPrice("")
            setDescription("")
        })
        .catch(err=> console.log(err))
    }

    return ( 
        <div>
            <h1>Product Form</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea rows="6" col="10" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Create Product" />
            </form>
        </div>
    );
}

export default ProductForm;