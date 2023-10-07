# Problem Statement - IXTL 
* Add Image features to FB project

```
File Created by : Dhiraj
Gmail  : dhiraj.datascientist
Github : dhirajdatascientist
```

```plaintext
food-booking-app/
├── public/
│   ├── index.html
│   ├── images/
│   │   ├── burger.jpg
│   │   ├── pizza.jpg
│   │   ├── fries.jpg
├── src/
│   ├── App.js
│   ├── Menu.js
│   ├── Order.js
│   └── App.css
├── package.json
├── package-lock.json
└── README.md
```

In this folder structure:

1. `public/`: This is where you place your static assets, including HTML files and images. Create a subdirectory called `images` to store food images.

2. `src/`: This directory contains your application's source code, including React components and styles.

3. `App.js`: The main component that combines the Menu and Order components and manages the application's state.

4. `Menu.js`: The component responsible for displaying the menu items and their images.

5. `Order.js`: The component responsible for displaying the user's order.

6. `App.css`: Your CSS styles for styling the components.

7. `package.json` and `package-lock.json`: Files related to your project's dependencies.

8. `README.md`: A documentation file for your project.

Place your food images (e.g., `burger.jpg`, `pizza.jpg`, `fries.jpg`) inside the `public/images` directory. You can then reference these images in your code as shown in the previous example.

Remember to adjust the image paths in your `Menu.js` component to match the actual filenames and extensions of your food images.

# To add image Feature

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

* Go to App.js and update the menuItems

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
