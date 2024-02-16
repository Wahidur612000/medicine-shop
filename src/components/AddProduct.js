import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [medicineName, setMedicineName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState('');

  const handleProduct = () => {
    const newProduct = {
      medicineName: medicineName,
      desc: desc,
      price: price,
      availableQuantity: availableQuantity,
    };

    // Check if the new product already exists in the list
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const isDuplicate = existingProducts.some(product => product.medicineName === newProduct.medicineName);
    if (!isDuplicate) {
      // Call the onAdd function to add the new product
      onAdd(newProduct);
      // Update local storage
      localStorage.setItem('products', JSON.stringify([...existingProducts, newProduct]));
    }

    // Clear input fields
    setMedicineName('');
    setDesc('');
    setPrice('');
    setAvailableQuantity('');
  };

  return (
    <div>
      <div>
        <label>Medicine Name:</label>
        <input type="text" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Available Quantity:</label>
        <input type="text" value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)} />
      </div>
      <button onClick={handleProduct}>Add</button>
    </div>
  );
};

export default AddProduct;
