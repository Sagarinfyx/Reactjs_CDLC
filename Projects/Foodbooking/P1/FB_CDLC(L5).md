# Problem Statement - IXTL 
* Add CSS to this project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

**Step 1: Create a CSS file**
Create a CSS file named `App.css` in the `src` directory of your project.

**Step 2: Add CSS Styles**

In `App.css`, you can add some simple styles to make your app look more appealing:

```css
/* src/App.css */

.App {
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Add some margin to separate menu and order */
.Menu {
  margin-right: 20px;
}

.Order {
  flex: 1;
}
```

**Step 3: Import the CSS file**

In your `src/App.js` file, import the CSS file you just created:

```jsx
// src/App.js
import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import './App.css'; // Import the CSS file

const App = () => {
  // ... (Rest of your code remains the same)
};

export default App;
```

