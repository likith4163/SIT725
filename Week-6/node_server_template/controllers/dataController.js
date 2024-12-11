const { getData } = require('../models/dataModel');

async function fetchData(req, res) {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { fetchData };
