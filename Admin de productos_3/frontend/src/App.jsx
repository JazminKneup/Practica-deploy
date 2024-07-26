import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import EditProductForm from './components/EditProductForm/EditProductForm';
import './App.css';

const App = () => {
  const [newProduct, setNewProduct] = useState(null);

  const handleProductCreated = (product) => {
    setNewProduct(product);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <ProductForm onProductCreated={handleProductCreated} />
            <h2>All Products</h2>
            <Link to="/products">
              <button className="view-products-button">View Products</button>
            </Link>
          </div>
        } />
        <Route path="/products" element={<ProductList newProduct={newProduct} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/:id/edit" element={<EditProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
