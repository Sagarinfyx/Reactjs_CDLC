# Problem Statement - IXTL 
* Add Order.js to this project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

**Step 1: Create Second Components**
- Inside your project directory, create a component: `Order.js`.
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

**Explanation**

This code is a JavaScript file written in JSX, which is a syntax extension for React. It defines a React component called "Order" that displays a list of items with their names and prices.


1. Import React:
   ```jsx
   import React from 'react';
   ```
   This line imports the React library, which is necessary to create and work with React components.

2. Define the "Order" component:
   ```jsx
   function Order(props) {
   ```
   Here, we define a function called "Order" that takes a single argument called "props." In React, components can receive data through "props" (short for properties), which are passed from their parent component.

3. Destructure the "orderItems" prop:
   ```jsx
   const { orderItems } = props;
   ```
   This line extracts the "orderItems" prop from the "props" object. "orderItems" is expected to be an array of items that we want to display in the order.

4. Return JSX (user interface) elements:
   ```jsx
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
   ```
   Here, we are returning JSX elements that represent the user interface of the "Order" component. Let's break it down further:

   - We start with a `<div>` element that wraps everything, defining a container for our component.

   - Inside the `<div>`, there is an `<h2>` element with the text "Order," serving as a title for our component.

   - Below the title, we have an `<ul>` element, which represents an unordered list.

   - Within the `<ul>`, we use the `map` function to loop through each item in the "orderItems" array and generate a list item (`<li>`) for each item.

   - We use the "key" attribute with the index as its value to uniquely identify each list item. React uses this key to efficiently update the DOM when the list changes.

   - Inside each `<li>`, we display the item's name and price using curly braces `{}` to embed JavaScript expressions within JSX.

5. Export the "Order" component as the default export:
   ```jsx
   export default Order;
   ```
   Finally, we export the "Order" component as the default export of this module, allowing it to be imported and used in other parts of the application.

**Example of usage:**

Suppose you have another React component where you want to display an order using the "Order" component. You can pass an array of order items as a prop, like this:

```jsx
import React from 'react';
import Order from './Order';

function App() {
  const orderItems = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 15 },
  ];

  return (
    <div>
      <h1>My Online Store</h1>
      <Order orderItems={orderItems} />
    </div>
  );
}

export default App;
```

In this example, we import the "Order" component and use it within the "App" component by passing the "orderItems" array as a prop. The "Order" component will then render the list of items with their names and prices inside the "App" component's user interface.