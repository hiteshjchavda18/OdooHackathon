// GET APIs endpoint
const express = require('express');
const router = express.Router();

// Sample data for demonstration purposes
const apiData = [
    { id: 1, name: 'API One', description: 'This is the first API' },
    { id: 2, name: 'API Two', description: 'This is the second API' },
    { id: 3, name: 'API Three', description: 'This is the third API' }
];

// GET /apis - Retrieve all APIs
router.get('/apis', (req, res) => {
    res.status(200).json(apiData);
});

// GET /apis/:id - Retrieve a specific API by ID
router.get('/apis/:id', (req, res) => {
    const apiId = parseInt(req.params.id, 10);
    const api = apiData.find(a => a.id === apiId);

    if (api) {
        res.status(200).json(api);
    } else {
        res.status(404).json({ message: 'API not found' });
    }
});