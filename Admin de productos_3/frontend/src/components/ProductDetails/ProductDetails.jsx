import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate('/products');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <div className="button-group">
        <button className="edit-button" onClick={() => navigate(`/${id}/edit`)}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default ProductDetails;
