const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files (CSS, JS) from the "public" directory
app.use(express.static('public'));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual login logic
    if (username === 'user' && password === 'pass') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});