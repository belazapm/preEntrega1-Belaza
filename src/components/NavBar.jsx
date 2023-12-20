import React from 'react';
import CartWidget from './CartWidget';
import '../style.css'; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#!">PB Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#!">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">FAQs</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
