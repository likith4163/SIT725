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

app.get('/addTwoNumbers/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(200).json({
            statusCode: 400,
            result: null,
        });
    }

    var result = (number1 + number2) || null;
    if (result == null || result == TypeError) {
        res.json({ result: result, statusCode: 400 }).status(400)
    }
    else { res.json({ result: result, statusCode: 200 }).status(200) }
});

app.get('/multiplyTwoNumbers/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    var result = number1 * number2;

    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)
      }
      else { res.json({result: result, statusCode: 200}).status(200) } 
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
