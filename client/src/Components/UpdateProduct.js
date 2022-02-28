import { navigate } from "@reach/router";
import axios from "axios";
import React, {useState, useEffect} from "react";

const UpdateProduct = (props) => {
    
    const [title, setTitle ] = useState("")
    const [price, setPrice ] = useState("")
    const [description, setDescription ] = useState("")
    const [errors, setErrors] = useState("")

    const {id} = props

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])
    
    const updateHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            navigate('/products')
        })
        .catch(err => {
            console.log(err)
            console.log("err.resonse",err.response)
            console.log("err.response.data", err.response.data)
            console.log("err.response.data.errors", err.response.data.errors)

            setErrors(err.response.data.errors)
        })

    }
    
    return ( 
        <div>
            <h2>Update Product</h2>
            <form onSubmit={updateHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

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

export default UpdateProduct;