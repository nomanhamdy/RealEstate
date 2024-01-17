const express = require('express');
const { readDataFromFile, writeDataToFile } = require('../utils/fileOps');
const Property = require('../models/property');

const router = express.Router();

// GET all properties
router.get('/', (req, res) => {
    const properties = readDataFromFile('properties.json');
    res.json(properties);
});

// POST a new property
router.post('/', (req, res) => {
    const properties = readDataFromFile('properties.json');
    const newProperty = new Property(
        Date.now().toString(), // Simple ID generation
        req.body.owner,
        req.body.address,
        req.body.price,
        'Available'
    );
    properties.push(newProperty);
    writeDataToFile('properties.json', properties);
    res.status(201).json(newProperty);
});

// Additional routes for PUT, DELETE can be added similarly

module.exports = router;
