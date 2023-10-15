### Scenario: Displaying and Updating a User Greeting Message

Imagine you're tasked with creating a component that displays a greeting message to the user. Below the message, there's a button that, when clicked, updates the greeting message.

#### Part 1: Using a Regular Variable
First, try to implement this using a regular JavaScript variable to hold and change the greeting message.

##### Questions:

1. How do you declare a regular variable to hold the greeting message?
2. How would you attempt to change the greeting message when the button is clicked using this variable?
3. Will the updated message reflect in the UI? Why or why not?

#### Part 2: Using State
Now, implement the same functionality using React state.

##### Questions:

4. How do you declare a state variable to hold the greeting message?
5. How can you update the greeting message when the button is clicked using state?
6. How does using state to manage the greeting message affect how the component updates?

### Guidance and Tips:

- For **Part 1**, try to manipulate a regular variable to handle the greeting message and observe the behavior when trying to render and update the message.
- For **Part 2**, utilize `useState` to manage and update the greeting message and observe how the component behaves upon updating the state.
  
```jsx
import React from 'react';

function GreetingComponent() {
  // Your code here for both parts
}

export default GreetingComponent;
```
