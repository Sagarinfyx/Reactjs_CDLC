## **Step 1: MongoDB Setup**

### **1.1. Install MongoDB**
Firstly, ensure MongoDB is installed. If not, download and install it from the [official MongoDB download page](https://www.mongodb.com/try/download/community).

### **1.2. Start MongoDB**

### Create one json file and import the data in MongoDB
* You will get the data from Data/quotes.json
* Create a Database Name `quoteapp` and collection name `quotes`

## **Step 2: Backend API Setup**

### **2.1. Initialize Backend Directory**
```bash
mkdir quoteapp-backend
cd quoteapp-backend
npm init -y
npm install express mongoose cors
```

### **2.2. Setup Express Server**

Inside `quoteapp-backend`, create a `server.js`:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost:27017/quoteapp', { useNewUrlParser: true, useUnifiedTopology: true });

const QuoteSchema = new mongoose.Schema({
  text: String
});
const Quote = mongoose.model('Quote', QuoteSchema);

app.use(cors());

app.get('/quotes', async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
```

### **2.3. Start Backend Server**
```bash
node server.js
```

## **Step 3: Modify React App to Fetch Quotes**

### **3.1. Adjust `useEffect` in React App**
In your React app, change the `useEffect` hook in `src/App.js`:

```javascript
useEffect(() => {
  fetch("http://localhost:5000/quotes")
    .then(response => response.json())
    .then(data => setQuotes(data.map(quote => quote.text)))
    .catch(error => console.error("Error fetching quotes:", error));
}, []);
```

### **3.2. Start React App**
Navigate to your React app directory and start the app:
```bash
npm start
```

## **Folder Structure**
Here's how the folders and files are organized:

```
project-root/
│
├── quoteapp-backend/            # Backend directory
│   ├── node_modules/            # Backend dependencies
│   ├── server.js                # Express server setup
│   └── package.json             # Backend npm metadata file
│
├── quoteapp/                    # React frontend directory
│   ├── public/                  # Static files for React app
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── App.js               # Main React component
│   │   ├── index.js             # Entry point for React app
│   │   └── ...
│   ├── node_modules/            # React app dependencies
│   ├── package.json             # React app npm metadata file
│   └── ...
│
└── ...
```
