### Part 1: Using a Regular Variable

#### 1. How do you declare a regular variable to hold the greeting message?

```jsx
let greetingMessage = "Hello, User!";
```

#### 2. How would you attempt to change the greeting message when the button is clicked using this variable?

You might try to write a function like this:

```jsx
function changeGreeting() {
    greetingMessage = "Welcome, User!";
}
```

#### 3. Will the updated message reflect in the UI? Why or why not?

No, the updated message will not reflect in the UI. In React, updating a regular variable does not trigger a re-render of the component, meaning the UI will not automatically update to display the new message.

### Sample Code for Part 1:

```jsx
import React from 'react';

function GreetingComponent() {
    let greetingMessage = "Hello, User!";
    
    function changeGreeting() {
        greetingMessage = "Welcome, User!";
    }
    
    return (
        <div>
            <p>{greetingMessage}</p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
}

export default GreetingComponent;
```

### Part 2: Using State

#### 4. How do you declare a state variable to hold the greeting message?

```jsx
const [greetingMessage, setGreetingMessage] = useState("Hello, User!");
```

#### 5. How can you update the greeting message when the button is clicked using state?

You would use the state-setting function returned by `useState`:

```jsx
function changeGreeting() {
    setGreetingMessage("Welcome, User!");
}
```

#### 6. How does using state to manage the greeting message affect how the component updates?

When state is updated using the state-setting function, the component is re-rendered, and the UI is updated to display the new greeting message.

### Sample Code for Part 2:

```jsx
import React, { useState } from 'react';

function GreetingComponent() {
    const [greetingMessage, setGreetingMessage] = useState("Hello, User!");
    
    function changeGreeting() {
        setGreetingMessage("Welcome, User!");
    }
    
    return (
        <div>
            <p>{greetingMessage}</p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
}

export default GreetingComponent;
```
