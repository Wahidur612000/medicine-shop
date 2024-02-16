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
                <button onClick={() => onIncrement(item)} className={styles.cartButton}>+</button>
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
