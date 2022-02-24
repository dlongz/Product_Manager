import React, {useState} from "react";
import ProductForm from "../Components/ProductForm";
import ProductList from "../Components/ProductList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const MainRoute = (props) => {

    const [product, setProduct] = useState([])

    return (  
        <Container>
            <Row>
                <ProductForm product={product} setProduct={setProduct} />
            </Row>    
            <Row>
                <ProductList product={product} setProduct={setProduct} />
            </Row>    
        </Container>
    );
}

export default MainRoute;