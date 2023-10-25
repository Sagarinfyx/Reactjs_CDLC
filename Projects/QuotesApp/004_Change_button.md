### To add a "Change" button which allows users to manually change the quote, follow these steps:

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
      changeQuote();
    }, 5000);

    // Cleanup effect by clearing interval when component unmounts
    return () => clearInterval(interval);
  }, [quotes]);

  const changeQuote = () => {
    setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
  }

  return (
    <div className="App">
      <h1>Quote App</h1>
      <p>{quotes[currentQuoteIndex]}</p>
      <button onClick={changeQuote}>Change</button>
    </div>
  );
}

export default App;
```

Here's the main change:

1. The `changeQuote` function updates the `currentQuoteIndex`.
2. The button with the label "Change" uses an `onClick` handler to call the `changeQuote` function, allowing users to manually change the quote.

