# To add a + and - symbol when an item is added to the cart, you can modify your code as follows. You can keep track of the quantity of each item in the cart and display the + and - symbols to increment and decrement the quantity accordingly. Here's the modified `Menu` component and `App.js`:

**Menu.js:**

```jsx
import React from 'react';

function Menu(props) {
  const { menuItems, addToOrder } = props;

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
```

**App.js:**

```jsx
import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Burger', price: 5.99 },
    { name: 'Pizza', price: 8.99 },
    { name: 'Fries', price: 2.99 },
  ]);

  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    const existingItemIndex = orderItems.findIndex((orderItem) => orderItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (item) => {
    const existingItemIndex = orderItems.findIndex((orderItem) => orderItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      if (updatedOrderItems[existingItemIndex].quantity === 1) {
        updatedOrderItems.splice(existingItemIndex, 1);
      } else {
        updatedOrderItems[existingItemIndex].quantity -= 1;
      }
      setOrderItems(updatedOrderItems);
    }
  };

  return (
    <div className="App">
      <h1>Food Booking App</h1>
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <Order orderItems={orderItems} removeFromOrder={removeFromOrder} />
    </div>
  );
};

export default App;
```

In this code, I've added a `quantity` property to each item in the cart, and the `addToOrder` function now handles incrementing the quantity when an item is added and decrementing it when the "-" button is clicked in the `Order` component. The `Order` component will display the quantity along with each item in the cart.