To make the React app fetch quotes from a JSON file, follow these steps:

### Step 1: Create a JSON File for Quotes

Inside the `public` directory of your React app, create a file named `quotes.json`. Add the following content:

```json
[
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You miss 100% of the shots you don’t take.",
    "Whether you think you can or you think you can’t, you’re right.",
    "The only limit to our realization of tomorrow is our doubts of today."
]
```

### Step 2: Modify App Component to Fetch Quotes

Update your `src/App.js`:

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Fetch the quotes when the component mounts
  useEffect(() => {
    fetch("/quotes.json")
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error("Error fetching quotes:", error));
  }, []);

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
      {quotes.length ? (
        <>
          <p>{quotes[currentQuoteIndex]}</p>
          <button onClick={changeQuote}>Change</button>
        </>
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
  );
}

export default App;
```

Here's what I have added:

1. **useState for `quotes`**: We initialize the quotes state as an empty array.
2. **useEffect to Fetch Data**: When the component mounts, we fetch data from the `quotes.json` file we placed in the public directory.
3. **Conditional Rendering**: If the quotes array has data, we display the quote and the "Change" button. Otherwise, we display a loading message.

