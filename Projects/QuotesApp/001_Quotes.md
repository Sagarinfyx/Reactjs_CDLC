### Step 1: Modify App Component

Open `src/App.js` and simplify it even further:

```javascript
import React from 'react';
import './App.css';

function App() {
  const quote = "The future belongs to those who believe in the beauty of their dreams.";

  return (
    <div className="App">
      <h1>Quote App</h1>
      <p>{quote}</p>
    </div>
  );
}

export default App;
```


