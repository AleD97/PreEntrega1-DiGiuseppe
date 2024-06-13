import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = ({ greeting, items, onAddToCart, onRemoveFromCart, cartItems }) => {
    return (
        <div className="container mt-4">
            <h2 style={{ color: '#000000', marginBottom: '10px' }}>{greeting}</h2>
            <ul className="list-unstyled" style={{ display: 'inline-block', textAlign: 'left' }}>
                {items.map(item => (
                    <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                            <span>{item.name}</span>
                            {cartItems.some(cartItem => cartItem.id === item.id) ? (
                                <FontAwesomeIcon 
                                    icon={faTimes} 
                                    className="text-danger" 
                                    onClick={() => onRemoveFromCart(item)}
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                />
                            ) : (
                                <FontAwesomeIcon 
                                    icon={faCheck} 
                                    className="text-success" 
                                    onClick={() => onAddToCart(item)}
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                />
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;