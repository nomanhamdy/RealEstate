const express = require('express');
const { readDataFromFile, writeDataToFile } = require('../utils/fileOps');
const Transaction = require('../models/transaction');

const router = express.Router();

// Helper function for validating transaction data
const validateTransactionData = (data) => {
    // Add more validation as needed
    return data.propertyId && data.buyer && !isNaN(data.amount);
};

router.get('/', (req, res) => {
    try {
        const transactions = readDataFromFile('transactions.json');
        res.json({ success: true, data: transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

router.post('/', (req, res) => {
    try {
        if (!validateTransactionData(req.body)) {
            return res.status(400).json({ success: false, message: 'Invalid transaction data' });
        }

        const transactions = readDataFromFile('transactions.json');
        const newTransaction = new Transaction(
            Date.now().toString(),
            req.body.propertyId,
            req.body.buyer,
            req.body.amount,
            new Date().toISOString()
        );
        transactions.push(newTransaction);
        writeDataToFile('transactions.json', transactions);
        res.status(201).json({ success: true, data: newTransaction });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// PUT route to update a transaction's status
router.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const transactions = readDataFromFile('transactions.json');
        const transactionIndex = transactions.findIndex(t => t.id === id);

        if (transactionIndex === -1) {
            return res.status(404).json({ success: false, message: 'Transaction not found' });
        }

        transactions[transactionIndex] = { ...transactions[transactionIndex], ...req.body };
        writeDataToFile('transactions.json', transactions);
        res.json({ success: true, data: transactions[transactionIndex] });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
