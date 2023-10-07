# Problem Statement - IXTL 
* Add Image features to FB project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

* To add images of food to your React food booking application, you can follow these steps:

**Step 1: Prepare Food Images**
First, make sure you have images of the food items you want to display in your application. You can find royalty-free food images online or create your own. Place these images in a folder within your project, e.g., a folder named `images` in the `public` directory.

**Step 2: Modify the `Menu.js` Component**

In the `Menu.js` component, update the code to display images along with food items. You can use the `public` directory as the base URL for your image paths.

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
            <img
              src={`/images/${item.image}`} // Adjust the path to your images
              alt={item.name}
              width="100"
              height="100"
            />
            <div>
              <strong>{item.name}</strong>
              <br />
              Price: ${item.price}
            </div>
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
```

**Step 3: Update Your Menu Data**

Ensure that your `menuItems` array includes an `image` property for each food item. For example:

```jsx
const [menuItems] = useState([
  { name: 'Burger', price: 5.99, image: 'burger.jpg' },
  { name: 'Pizza', price: 8.99, image: 'pizza.jpg' },
  { name: 'Fries', price: 2.99, image: 'fries.jpg' },
]);
```

**Step 4: Include CSS Styling for Images (Optional)**

You can add CSS styles to control the appearance of the images and their containers in your `App.css` or a separate CSS file.

```css
/* Add these styles to your CSS file */
li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

img {
  margin-right: 10px;
}
```

**Step 5: Serve Images from the `public` Folder**

Make sure that your images are located in the `public/images` directory. React will automatically serve static assets from the `public` folder, so you don't need to import them in your JavaScript code.

**Step 6: Run Your React Application**
Start your application with `npm start`, and you should see food images displayed along with their names and prices in your menu.
