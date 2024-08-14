// src/components/ProductItem.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    );
};

export default ProductItem;
