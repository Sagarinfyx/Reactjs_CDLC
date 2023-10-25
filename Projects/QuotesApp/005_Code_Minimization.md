### Step 1: Modify App Component

Open `src/App.js` and let's simplify:

```javascript
import React, { useState } from 'react';
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

  const changeQuote = () => {
    let nextIndex = currentQuoteIndex + 1;

    if (nextIndex === quotes.length) {
      nextIndex = 0; // If we're at the end of the list, loop back to the start
    }

    setCurrentQuoteIndex(nextIndex);
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
