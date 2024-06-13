import React from 'react';

const CartWidget = ({ cartItemCount }) => {
    return (
        <div className="d-flex align-items-center">
            <i className="fa fa-shopping-cart fa-lg"></i>
            <span className="ml-2">{cartItemCount}</span>
        </div>
    );
}

export default CartWidget;