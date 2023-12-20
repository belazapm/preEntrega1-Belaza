import React from 'react';
import '../style.css'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="material-icons cart-icon">shopping_cart</i>
      <span className="notification">1</span>
    </div>
  );
};

export default CartWidget;
