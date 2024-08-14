
// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cart, removeFromCart } = useContext(CartContext); // Añadimos removeFromCart al destructuring
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <h1>My Zapatillas Store</h1>
            <button onClick={toggleCart}>Carrito ({cart.length})</button>
            {isOpen && (
                <div className="cart-dropdown">
                    {cart.length > 0 ? (
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <span>{item.name}</span> - ${item.price}
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Tu carrito esta vacio</p>
                    )}
                    {cart.length > 0 && (
                        <Link to="/checkout">
                            <button onClick={toggleCart}>Ir al Checkout</button>
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;