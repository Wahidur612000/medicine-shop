// Cart.js

import React from 'react';
import styles from './Cart.module.css'; // Importing styles
import Card from './Card';

const Cart = ({ cartItems, onIncrement, onDecrement, onOrder, onClose }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Define a handler to handle incrementing the quantity
  const handleIncrementWithCheck = (item) => {
    // Check if the available quantity is greater than 0
    if (item.availableQuantity > 0) {
      // Call the onIncrement function to increment the quantity
      onIncrement(item);
    } else {
      // Alert the user that the item is out of stock
      alert("This item is out of stock.");
    }
  };

  return (
    <Card>
      <div className={styles.cart}>
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.medicineName}</td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td className={styles.actions}>
                  <button onClick={() => onDecrement(item)} className={styles.cartButton}>-</button>
                  <span className={styles.amount}>{item.quantity}</span>
                  {/* Use the handleIncrementWithCheck function */}
                  <button onClick={() => handleIncrementWithCheck(item)} className={styles.cartButton}>+</button>
                </td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.summary}>
          <span>Total:</span>
          <span className={styles.price}>{calculateTotal()}</span>
        </div>
        <button onClick={onOrder} className={styles.cartButton}>Order</button>
        <button onClick={onClose} className={styles.cartButton}>Close</button>
      </div>
    </Card>
  );
};

export default Cart;
