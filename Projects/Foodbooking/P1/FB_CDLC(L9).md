# Problem Statement - IXTL 
* Add Login and logout feature

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

Login.js:

```jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate the username and password, and perform authentication logic here.
    // For simplicity, we'll check if the username and password match hardcoded values.
    if (username === 'admin' && password === 'admin') {
      onLogin(true, username); // Pass the username to onLogin
    } else {
      onLogin(false, ''); // Pass an empty string on failed login
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

* Go to App.js and add this code:

```jsx
import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';
import './App.css';

const App = () => {
  const [menuItems] = useState([
    { name: 'Burger', price: 5.99, image: 'burger.jpg' },
    { name: 'Pizza', price: 8.99, image: 'pizza.jpg' },
    { name: 'Fries', price: 2.99, image: 'fries.jpg' },
    { name: 'Cake', price: 2.99, image: 'cake.jpg' },
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedIn, user) => {
    setIsLoggedIn(loggedIn);
    setUsername(user); // Set the username when logging in
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

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
      <header>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <h1>Food Booking App</h1>
        )}
      </header>
      {isLoggedIn ? (
        <div>
          <div className="Menu class grid-item">
            <Menu menuItems={menuItems} addToOrder={addToOrder} />
          </div>
          <div className="Order">
            <Order orderItems={orderItems} removeFromOrder={removeFromOrder} />
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
```

**Feature**
1. Login
2. Logout
3. Username will be displayed on top
4. Remember the last order