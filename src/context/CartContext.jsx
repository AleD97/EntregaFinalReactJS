// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(item => item.id === productId);

            if (productIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart.splice(productIndex, 1);
                return updatedCart;
            }

            return prevCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
