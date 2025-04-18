const express = require('express');
const app = express();
const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = 3000;

const version = '1.0.0';

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html"); 
    console.log(`[Version ${version}]: New request => http://${hostname}:${port}${req.url}`);
});

// Health check route
app.get('/health', (req, res) => {    
    res.sendStatus(200);  // Send a 200 OK status
    console.log(`[Version ${version}]: New request => http://${hostname}:${port}${req.url}`);
});

app.listen(port, hostname, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
});
