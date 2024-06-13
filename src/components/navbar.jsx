import React from 'react';
import CartWidget from './CartWidget';

const Navbar = ({ onCategoryChange, cartItemCount }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#d1ecf1' }}>
                <div className="container-fluid">
                    <a 
                        className="navbar-brand" 
                        href="#" 
                        onClick={() => onCategoryChange('Inicio')} 
                        style={{ color: '#000000' }}
                    >
                        ¡Bienvenidos a Mi Tienda!
                    </a>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a 
                                    className="nav-link" 
                                    href="#" 
                                    onClick={() => onCategoryChange('Nintendo')} 
                                    style={{ color: '#000000' }}
                                >
                                    Nintendo
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                    className="nav-link" 
                                    href="#" 
                                    onClick={() => onCategoryChange('PlayStation')} 
                                    style={{ color: '#000000' }}
                                >
                                    PlayStation
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                    className="nav-link" 
                                    href="#" 
                                    onClick={() => onCategoryChange('Xbox')} 
                                    style={{ color: '#000000' }}
                                >
                                    Xbox
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <CartWidget cartItemCount={cartItemCount} />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;