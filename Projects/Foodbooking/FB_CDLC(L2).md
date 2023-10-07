# Problem Statement - IXTL 
* Add Menu.js to this project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

**Step 1: Create First Components**
- Inside your project directory, create a component: `Menu.js`.
- In `Menu.js`, create a simple menu of food items:

```jsx
// src/Menu.js
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


**Explanation**

Imagine you're building a digital menu for a restaurant using a programming language called JavaScript with a framework/library called React. This menu will display a list of food items and their prices, and customers can click a button to add an item to their order.

1. **Import React and Create a Function Component:**
   
   ```jsx
   import React from 'react';
   
   function Menu(props) {
   ```
   
   - In this line, we're importing the React library, which is used for building user interfaces.
   - We're defining a function component called `Menu`. A function component is like a reusable building block for a user interface.

2. **Receive Props:**
   
   ```jsx
   const { menuItems, addToOrder } = props;
   ```
   
   - In this line, we're extracting two props (`menuItems` and `addToOrder`) from the `props` object that gets passed to this component.
   - Think of props as information or instructions that you can pass into the component from outside.

3. **Render the Menu:**
   
   ```jsx
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
   ```
   
   - This is the core part of the component, where it defines what should be displayed.
   - It starts with an HTML-like structure, which will be converted to actual HTML when the component is rendered.
   - We have an `<h2>` element with the text "Menu" as a heading.
   - We use a `<ul>` (unordered list) to display a list of items.

4. **Map Over Menu Items:**
   
   ```jsx
   {menuItems.map((item, index) => (
     <li key={index}>
       {item.name} - ${item.price}
       <button onClick={() => addToOrder(item)}>Add to Order</button>
     </li>
   ))}
   ```
   
   - Here, we're using the `map` function to go through each item in the `menuItems` array.
   - For each item, we're creating an `<li>` (list item) element.
   - We display the item's `name` and `price`, and next to it, there's a button labeled "Add to Order."

5. **Key Prop for List Items:**

   ```jsx
   <li key={index}>
   ```
   
   - Each `<li>` element has a `key` attribute, which is important when rendering lists in React.
   - The `key` should be unique for each list item. It helps React efficiently update and re-render lists.

6. **Button Click Event:**

   ```jsx
   <button onClick={() => addToOrder(item)}>Add to Order</button>
   ```
   
   - This is a button element with an `onClick` event handler.
   - When a customer clicks the button, it triggers the `addToOrder` function, passing the `item` as an argument.
   - Essentially, it's adding the selected item to the customer's order.

7. **Export the Component:**
   
   ```jsx
   export default Menu;
   ```
   
   - Finally, we export the `Menu` component so that it can be used in other parts of the application.

**Conclusion**
So, in simple terms, this code defines a menu component for a restaurant app. It receives a list of menu items and a function to add items to an order. It then displays the menu items with their names, prices, and a button to add them to the order when clicked.