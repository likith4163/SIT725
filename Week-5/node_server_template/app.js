const express = require('express');
const { fetchData } = require('./controllers/dataController');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static('views'));

// Root route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API route
app.get('/api/data', fetchData);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
