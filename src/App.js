import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // State to control visibility of Cart component

  useEffect(() => {
    const storedMedicines = JSON.parse(localStorage.getItem('products')) || [];
    setMedicines(storedMedicines);
  }, []); 

  const handleAddProduct = (newProduct) => {
    // Update the medicines state with the new product
    setMedicines(prevMedicines => [...prevMedicines, newProduct]);
    
    // Save to local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...existingProducts, newProduct]));
  };

  const addToCart = (medicine, quantity) => {
    const existingCartItem = cartItems.find(item => item.medicineName === medicine.medicineName);
  
    if (existingCartItem) {
      const updatedCartItems = cartItems.map(item =>
        item.medicineName === existingCartItem.medicineName
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const newCartItem = { ...medicine, quantity };
      setCartItems(prevCartItems => [...prevCartItems, newCartItem]);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, newCartItem]));
    }
  
    const updatedMedicines = medicines.map(med =>
      med.medicineName === medicine.medicineName
        ? { ...med, availableQuantity: med.availableQuantity - quantity }
        : med
    );
    setMedicines(updatedMedicines);
  };
  

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  const handleIncrement = (item) => {
    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.medicineName === item.medicineName ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    const updatedMedicines = medicines.map(med =>
      med.medicineName === item.medicineName ? { ...med, availableQuantity: med.availableQuantity - 1 } : med
    );
  
    setCartItems(updatedCartItems);
    setMedicines(updatedMedicines);
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('medicines', JSON.stringify(updatedMedicines));
  };
  
  const handleDecrement = (item) => {
    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.medicineName === item.medicineName ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter(cartItem => cartItem.quantity > 0);
  
    const updatedMedicines = medicines.map(med =>
      med.medicineName === item.medicineName ? { ...med, availableQuantity: med.availableQuantity + 1 } : med
    );
  
    setCartItems(updatedCartItems);
    setMedicines(updatedMedicines);
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('medicines', JSON.stringify(updatedMedicines));
  };
  
          
  const handleOrder = () => {
    alert('Order Placed!');
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <div>
      <Header onClickCart={handleShowCart} /> {/* Pass handleShowCart as prop to Header */}
      <AddProduct onAdd={handleAddProduct} />
      <MedicineList medicines={medicines} addToCart={addToCart} />
      {showCart && 
        <Cart 
          cartItems={cartItems} 
          onIncrement={handleIncrement} 
          onDecrement={handleDecrement} 
          onOrder={handleOrder} 
          onClose={handleHideCart} 
        />
      } {/* Render Cart only if showCart is true */}
    </div>
  );
}

export default App;
