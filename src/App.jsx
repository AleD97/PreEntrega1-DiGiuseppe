import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const consoles = [
    { id: 1, name: 'Nintendo Switch', category: 'Nintendo' },
    { id: 2, name: 'PlayStation 5', category: 'PlayStation' },
    { id: 3, name: 'Xbox Series X', category: 'Xbox' },
    { id: 4, name: 'Nintendo NES', category: 'Nintendo' },
    { id: 5, name: 'PlayStation 1', category: 'PlayStation' },
    { id: 6, name: 'Xbox Original', category: 'Xbox' },
    { id: 7, name: 'Super Nintendo', category: 'Nintendo' },
];

function App() {
    const [selectedCategory, setSelectedCategory] = useState('Inicio');
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleAddToCart = (console) => {
        setCartItems([...cartItems, console]);
    };

    const handleRemoveFromCart = (console) => {
        setCartItems(cartItems.filter(item => item.id !== console.id));
    };

    const filteredConsoles = selectedCategory === 'Inicio' 
        ? consoles 
        : consoles.filter(console => console.category === selectedCategory);

    return (
        <div className="App">
            <Navbar onCategoryChange={handleCategoryChange} cartItemCount={cartItems.length} />
            <div className="container text-center mt-5">
                <ItemListContainer 
                    greeting="¡Bienvenidos a Mi Tienda de Consolas!" 
                    items={filteredConsoles} 
                    onAddToCart={handleAddToCart}
                    onRemoveFromCart={handleRemoveFromCart}
                    cartItems={cartItems}
                />
            </div>
        </div>
    );
}

export default App;