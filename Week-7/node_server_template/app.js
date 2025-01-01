const express = require('express');
const { fetchData } = require('./controllers/dataController');

const app = express();
const port = 3000;

const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

// Serve static files
app.use(express.static('views'));

// Root route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API route
app.get('/api/data', fetchData);

// Start the server
io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        randNumber=parseInt(Math.random()*10);
        socket.emit('number', randNumber);
        console.log('Emmiting Number '+randNumber);
    }, 1000)
});

http.listen(port, ()=>{
    console.log('express server started');
});
