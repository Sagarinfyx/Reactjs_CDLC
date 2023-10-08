## State in ReactJS(L1)
* In React.js, "state" refers to an internal data storage mechanism that allows components to store and manage data that can change over time. 
* State is a fundamental concept in React and is crucial for building dynamic and interactive user interfaces. 

1. **Counter Component:**
   
   A common use case for state is building a counter component that increments or decrements a value when a button is clicked. Here's a simplified example:

   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     const increment = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
       </div>
     );
   }
   ```

2. **Toggle Component:**

   State can be used to manage the visibility of elements. For example, you can create a component that toggles the display of some content:

   ```jsx
   import React, { useState } from 'react';

   function Toggle() {
     const [isVisible, setIsVisible] = useState(false);

     const toggleVisibility = () => {
       setIsVisible(!isVisible);
     };

     return (
       <div>
         <button onClick={toggleVisibility}>Toggle</button>
         {isVisible && <p>Content is visible!</p>}
       </div>
     );
   }
   ```

3. **Form Input Handling:**

   State is frequently used to manage the value of form inputs and update them as the user types:

   ```jsx
   import React, { useState } from 'react';

   function InputForm() {
     const [inputValue, setInputValue] = useState('');

     const handleInputChange = (event) => {
       setInputValue(event.target.value);
     };

     return (
       <div>
         <input
           type="text"
           value={inputValue}
           onChange={handleInputChange}
         />
         <p>You typed: {inputValue}</p>
       </div>
     );
   }
   ```

4. **Fetching Data:**

   State is used to store and display data fetched from an API. When the data is fetched, it can be stored in state and displayed in the component:

   ```jsx
   import React, { useState, useEffect } from 'react';

   function DataFetching() {
     const [data, setData] = useState([]);

     useEffect(() => {
       fetch('https://api.example.com/data')
         .then((response) => response.json())
         .then((result) => setData(result));
     }, []);

     return (
       <div>
         <ul>
           {data.map((item) => (
             <li key={item.id}>{item.name}</li>
           ))}
         </ul>
       </div>
     );
   }
   ```

5. **Conditional Rendering:**

   State can be used to conditionally render components or elements based on certain conditions. For example, showing a login form or user profile based on whether a user is authenticated:

   ```jsx
   import React, { useState } from 'react';

   function AuthExample() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     const handleLogin = () => {
       setIsLoggedIn(true);
     };

     return (
       <div>
         {isLoggedIn ? (
           <p>Welcome, User!</p>
         ) : (
           <button onClick={handleLogin}>Login</button>
         )}
       </div>
     );
   }
   ```
