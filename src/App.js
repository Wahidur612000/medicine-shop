import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import MedicineList from './components/MedicineList';

function App() {
  const [medicines, setMedicines] = useState([]);

  
  useEffect(() => {
    const storedMedicines = JSON.parse(localStorage.getItem('products')) || [];
    setMedicines(storedMedicines);
  }, []); 

  const handleAddProduct = (newProduct) => {
    
    setMedicines([...medicines, newProduct]);
   
    localStorage.setItem('products', JSON.stringify([...medicines, newProduct]));
  };

  return (
    <div>
      <Header />
      <AddProduct onAdd={handleAddProduct} />
      <MedicineList medicines={medicines} />
    </div>
  );
}

export default App;
