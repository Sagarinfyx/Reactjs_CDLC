# Problem Statement - IXTL 
* Add Remove features to FB project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

To add a remove feature to your React food booking application, you can modify your existing code to allow users to remove items from their order. Here's how you can do it:

**Step 1: Modify the `Order.js` Component**

In the `Order.js` component, add a remove button next to each item in the order. When the remove button is clicked, it will trigger a function to remove the item from the order.

```jsx
// src/Order.js
import React from 'react';

function Order(props) {
  const { orderItems, removeFromOrder } = props;

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromOrder(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;
```

**Step 2: Modify the `App.js` Component**

In the `App.js` component, create a `removeFromOrder` function to handle item removal. This function will take the index of the item to be removed from the order and update the order state accordingly.

```jsx
// src/App.js
import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import './App.css';

const App = () => {
  const [menuItems] = useState([
    { name: 'Burger', price: 5.99 },
    { name: 'Pizza', price: 8.99 },
    { name: 'Fries', price: 2.99 },
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
```

