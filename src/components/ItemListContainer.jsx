import React from 'react';
import '../style.css'; 

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="item-list-container">
      <p>{saludo}</p>
    </div>
  );
};

export default ItemListContainer;
