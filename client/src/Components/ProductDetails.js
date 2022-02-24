import React, {useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const ProductDetails = (props) => {

    const {id} = props
    const [product, setProduct] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) => console.log(err))
    },[])
    return (  
        <Container>
            <Row>
                <h2>{product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </Row>
        </Container>
    );
}

export default ProductDetails;