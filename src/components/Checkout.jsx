// src/components/Checkout.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../services/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [orderId, setOrderId] = useState('');

    const navigate = useNavigate();  // Inicializar useNavigate

    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

    const handleOrder = async (e) => {
        e.preventDefault();
        const order = {
            customer: {
                name,
                email,
                address,
            },
            items: cart,
            total: totalAmount,
            date: new Date(),
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            alert('Your order has been placed successfully!');
        } catch (error) {
            console.error('Error placing order: ', error);
            alert('There was an issue placing your order. Please try again.');
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            {orderId ? (
                <div>
                    <h3>Thank you for your order!</h3>
                    <p>Your order ID is: {orderId}</p>
                </div>
            ) : (
                <div>
                    <h3>Orden de compra</h3>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${totalAmount}</h4>
                    <form onSubmit={handleOrder}>
                        <div>
                            <label>Nombre:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>direccion:</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Realizar orden</button>
                    </form>
                </div>
            )}
            <button onClick={() => navigate('/')}>Volver al inicio</button>  {/* Botón para volver a Home */}
        </div>
    );
};

export default Checkout;
