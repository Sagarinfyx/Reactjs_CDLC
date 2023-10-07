# Problem Statement - IXTL 
* Add simple login page

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

To add a simple login page to your React food booking application, you can create a new component for the login page and set up routes using React Router. Here's how you can do it:

**Step 1: Create a Login Component**

Create a new file named `Login.js` inside the `src` directory to define your login component:

```jsx
// src/Login.js
// src/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For testing purposes, let's use a hardcoded username and password
    if (username === 'dhiraj' && password === 'datascientist') {
      onLogin(username);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

```

**Step 2: Set Up Routes**

Install React Router if you haven't already:

```bash
npm install react-router-dom
```

Now, update your `src/App.js` to include routing and render the `Login` component when the user is not logged in:

```jsx
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';
import './App.css';

const App = () => {
  const [menuItems] = useState([
    { name: 'Burger', price: 5.99, image: 'burger.jpg' },
    { name: 'Pizza', price: 8.99, image: 'pizza.jpg' },
    { name: 'Fries', price: 2.99, image: 'fries.jpg' },
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [user, setUser] = useState(null);

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <h1>Food Booking App</h1>
        <Route
          path="/login"
          render={() =>
            user ? <Redirect to="/" /> : <Login onLogin={handleLogin} />
          }
        />
        {user ? (
          <>
            <Route exact path="/" render={() => <Menu menuItems={menuItems} addToOrder={addToOrder} />} />
            <Route path="/order" render={() => <Order orderItems={orderItems} />} />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    </Router>
  );
};

export default App;
```

In this code:

- We use `BrowserRouter` and `Route` components from React Router to set up routing.
- If the user is not logged in, they are redirected to the login page. Once logged in, they are redirected to the main page, where they can access the menu and order.
- A logout button is displayed when the user is logged in, allowing them to log out.

**Step 3: Update CSS (Optional)**

You can add CSS styles to your `Login` component and any other components as needed for styling.

**Step 4: Run Your React Application**

Start your application with `npm start`, and you should be able to access the login page by navigating to `/login` in your web browser. Once logged in, you can access the main application pages.

This setup provides a basic login functionality for your React food booking application. You can further enhance it by implementing a more robust authentication system if needed.