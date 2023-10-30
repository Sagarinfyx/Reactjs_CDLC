1. **Setup**:
   First, make sure you have Node.js and npm (Node Package Manager) installed on your machine. If you don't have them, you can download and install from [here](https://nodejs.org/).

   Once you have them installed, you can set up a new React application using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), which is a tool that sets up a new React.js application with a good default configuration. In your terminal or command prompt, run:

   ```bash
   npx create-react-app hello-world
   ```

   This will create a new directory called `hello-world` with all the files you need. Once it's done, navigate into your new project:

   ```bash
   cd hello-world
   ```

2. **Edit `App.js`**:
   Navigate to `src/App.js` in your favorite code editor. You should see a default functional component provided by Create React App. Modify it to look like this:

   ```javascript
   import React from 'react';

   function App() {
     return (
       <div className="App">
         <h1>Hello, World!</h1>
       </div>
     );
   }

   export default App;
   ```

3. **Run the App**:
   In your terminal or command prompt, make sure you're in the `hello-world` directory, then run:

   ```bash
   npm start
   ```

   This will start the development server, and your new "Hello, World!" React app should open in a new browser tab. If it doesn't, you can manually navigate to [http://localhost:3000](http://localhost:3000) in your browser.
