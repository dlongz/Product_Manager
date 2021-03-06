import React from 'react'
import './App.css';
import { Router } from '@reach/router';
import MainRoute from './Views/MainRoute';
import ProductDetails from './Components/ProductDetails';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <MainRoute path="/products" default/>
        <ProductDetails path="/products/:id" />
        <UpdateProduct path="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
