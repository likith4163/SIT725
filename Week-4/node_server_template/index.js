const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const connectionURI = 'mongodb://localhost:27017';
const client = new MongoClient(connectionURI);
const dbName = 'sample_mflix';

let db; 

async function connectToMongoDB() {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit if connection fails
    }
}

app.get('/api/data', async (req, res) => {
    try {
        const collection = db.collection('week4');
        const documents = await collection.find({}).toArray();
        res.json(documents); // Send data as JSON response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use(express.static('public_html'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    connectToMongoDB(); // Connect to MongoDB when the server starts
});


async function main() {
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('week4');
    const insertDoc = await collection.insertOne({
        field1: 'value1',
        field2: 'value2',
    });

    console.log('Inserted documents =>', insertDoc);
}