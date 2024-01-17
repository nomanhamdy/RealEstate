const express = require('express');
const { readDataFromFile } = require('../utils/fileOps');
const router = express.Router();

router.post('/login', (req, res) => {
    try {
        const users = readDataFromFile('users.json');
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Successfully authenticated user
            res.json({ success: true, message: 'Login successful', user });
        } else {
            // Authentication failed
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        // Server error
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});

// Additional user-related routes can be added here as needed

module.exports = router;
