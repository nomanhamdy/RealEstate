const fs = require('fs');
const path = require('path');

function readDataFromFile(fileName) {
    try {
        const filePath = path.join(__dirname, '..', 'data', fileName);
        const rawData = fs.readFileSync(filePath);
        return JSON.parse(rawData);
    } catch (error) {
        console.error(`Error reading from ${fileName}:`, error);
        return [];
    }
}

function writeDataToFile(fileName, data) {
    try {
        const filePath = path.join(__dirname, '..', 'data', fileName);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Error writing to ${fileName}:`, error);
    }
}

module.exports = { readDataFromFile, writeDataToFile };
