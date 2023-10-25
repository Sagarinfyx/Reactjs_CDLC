## Requirements
* Change the quotes after every 5 seconds
* I make use of React's `useState` and `useEffect` hooks. The basic idea is:

1. Use an array to store multiple quotes.
2. Use `useState` to keep track of the currently displayed quote's index.
3. Use `useEffect` to change the quote every 5 seconds.

**Implemention**

### Step 1: Modify App Component

Open `src/App.js` and update it:

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const quotes = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You miss 100% of the shots you don’t take.",
    "Whether you think you can or you think you can’t, you’re right.",
    "The only limit to our realization of tomorrow is our doubts of today."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 5000);

    // Cleanup effect by clearing interval when component unmounts
    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="App">
      <h1>Quote App</h1>
      <p>{quotes[currentQuoteIndex]}</p>
    </div>
  );
}

export default App;
```

In this setup:

1. The `useEffect` hook sets up an interval to update the `currentQuoteIndex` every 5 seconds.
2. We use the modulo operator (`%`) to loop back to the beginning of the `quotes` array when we reach the end.
3. The displayed quote changes based on the `currentQuoteIndex`.
