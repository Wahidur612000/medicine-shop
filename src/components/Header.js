// Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = ({ onClickCart }) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.logo}>Medicine Shop</h1>
      <button className={styles.cartButton} onClick={onClickCart}>Cart</button>
    </div>
  );
};

export default Header;
