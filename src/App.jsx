// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./components/Checkout";
import NotFound from "./pages/NotFound";
import { CartProvider } from './context/CartContext';  // Importa el CartProvider

function App() {
    return (
        <CartProvider>  {/* Envolviendo toda la aplicación */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;

