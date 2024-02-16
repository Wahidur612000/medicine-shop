// Cart.js
import React from 'react';

const Cart = ({ cartItems, onIncrement, onDecrement, onOrder, onClose }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
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
              <td>
                <button onClick={() => onDecrement(item)}>-</button>
                {item.quantity}
                <button onClick={() => onIncrement(item)}>+</button>
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total: {calculateTotal()}</div>
      <button onClick={onOrder}>Order</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Cart;
