# Problem Statement - IXTL 
* Add Folder structure

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