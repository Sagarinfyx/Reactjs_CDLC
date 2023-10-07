// src/App.js
import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import './App.css';

const App = () => {
  const [menuItems] = useState([
    { name: 'Burger', price: 5.99,image: 'burger.jpg' },
    { name: 'Pizza', price: 8.99,image: 'burger.jpg' },
    { name: 'Fries', price: 2.99,image: 'burger.jpg' },
  ]);

  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const removeFromOrder = (index) => {
    const newOrder = [...orderItems];
    newOrder.splice(index, 1);
    setOrderItems(newOrder);
  };

  return (
    <div className="App">
      <h1>Food Booking App</h1>
      <div className="Menu">
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
      </div>
      <div className="Order">
        <Order orderItems={orderItems} removeFromOrder={removeFromOrder} />
      </div>
    </div>
  );
};

export default App;