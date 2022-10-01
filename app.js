const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./Routes/index');  

const hostname = '127.0.0.1';
const port = 8900;

const app = express();

app.use(bodyParser.json());  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', resRoutes);  // registering the routes

// starting the server using the listen function on specific port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});