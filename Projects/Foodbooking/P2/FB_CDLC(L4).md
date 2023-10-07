# Problem Statement - IXTL 
* Add Order.js to this project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

- In `Order.js`, create a component to display the user's order:

```jsx
// src/Order.js
import React from 'react';

function Order(props) {
  const { orderItems } = props;

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;
```

**Step 4: Create the App Component**
- Modify the `src/App.js` file to create the main App component that renders both the Menu and Order components:

```jsx
// src/App.js
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
    setOrderItems([...orderItems, item]);
  };

  return (
    <div className="App">
      <h1>Food Booking App</h1>
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <Order orderItems={orderItems} />
    </div>
  );
};

export default App;
```

**Step 5: Run Your React Application**
Save your files and run the application using the following command:

```bash
npm start
```

This will start a development server, and your app should open in your default web browser at http://localhost:3000/. You'll see a simple food booking interface where you can add items to your order.
