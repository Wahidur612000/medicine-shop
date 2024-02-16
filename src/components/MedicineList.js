import React, { useState } from 'react';

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
    <div>
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
                <input type="number" value={quantity} onChange={handleQuantityChange} />
                <button onClick={() => addToCart(medicine, quantity)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineList;
