import React, { useState } from 'react';
import './App.css';

function App() {
  const initialItems = [
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 40 },
    { id: 3, name: 'Shoes', price: 60 },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const addToCart = () => {
    const itemToAdd = initialItems.find(item => item.name === selectedItem);
    if (itemToAdd) {
      setCartItems(cartItems.concat(itemToAdd));
    }
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div>
        <h2>Available Items</h2>
        <ul>
          {initialItems.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          <option value="">Select an item to add</option>
          {initialItems.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
