import React from 'react'
import './App.css';
import { Router } from '@reach/router';
import MainRoute from './Views/MainRoute';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <MainRoute path="/products" default/>
        <ProductDetails path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
