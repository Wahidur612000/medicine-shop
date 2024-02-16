import React, { useState } from 'react';
import styles from './MedicineList.module.css'; // Importing styles

const MedicineList = ({ medicines, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Check if medicines is an array before attempting to map over it
  if (!Array.isArray(medicines)) {
    return <div>No medicines available</div>;
  }

  return (
    <div className={styles.medicineList}> {/* Applying styles */}
      <h2>Medicine List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.medicineName}</td>
              <td>{medicine.desc}</td>
              <td>{medicine.price}</td>
              <td>{medicine.availableQuantity}</td>
              <td>
                <input type="number" value={quantity} onChange={handleQuantityChange} className={styles.quantityInput} /> {/* Applying styles */}
                <button onClick={() => addToCart(medicine, quantity)} className={styles.addToCartButton}>Add to Cart</button> {/* Applying styles */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineList;
