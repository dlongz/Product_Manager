import React, {useState } from "react";
import axios from 'axios'

const ProductForm = (props) => {

    const [title, setTitle ] = useState("")
    const [price, setPrice ] = useState("")
    const [description, setDescription ] = useState("")
    const [errors, setErrors] = useState("")

    const {product, setProduct} = props

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            console.log('Product Propj=',product)
            setProduct([...product, res.data])
            // setProduct((prevState) => (
            //     [...prevState, res.data.item]
            // ))

            setTitle("")
            setPrice("")
            setDescription("")
            // navigate('/products')
            
        })
        .catch(err=> {
            console.log(err)
            console.log("err.resonse",err.response)
            console.log("err.response.data", err.response.data)
            console.log("err.response.data.errors", err.response.data.errors)

            setErrors(err.response.data.errors)
        })
    }

    return ( 
        <div>
            <h1>Product Form</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                    {/* <p>{errors.title.message}</p> */}
                    {
                        errors.title? 
                        <p>{errors.title.message}</p>
                        :null
                    }
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

                    {
                        errors.price? 
                        <p>{errors.price.message}</p>
                        :null
                    }
                </div>
                <div>
                    <label>Description: </label>
                    <textarea rows="6" col="10" value={description} onChange={(e) => setDescription(e.target.value)} />

                    {
                        errors.description? 
                        <p>{errors.description.message}</p>
                        :null
                    }
                </div>
                <input type="submit" value="Create Product" />
            </form>
        </div>
    );
}

export default ProductForm;