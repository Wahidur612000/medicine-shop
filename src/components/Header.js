// Header.js
import React from 'react';

const Header = ({ onClickCart }) => {
  return (
    <div>
      <h1>Medicine Shop</h1>
      <button onClick={onClickCart}>Cart</button>
    </div>
  );
};

export default Header;
