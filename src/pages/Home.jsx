// src/pages/Home.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div>
            <h2>Zapas disponibles</h2>
            <ProductList />
        </div>
    );
};

export default Home;
