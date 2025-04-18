const express = require('express');
const app = express();
const hostname = '0.0.0.0'; // Binds to all network interfaces
const port = 3000;

const version = '1.0.0';

app.get('/', (req, res) => {
    res.send(`<html>
                <body>
                    <h1 style="color:blue;text-align: center;margin-top: 100px;">[Version ${version}]: This is AMAZING!!! Like & Subscribe!</h1>
                    <div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
                        <img src="https://picsum.photos/400/400?random=1">
                    </div>
                </body>
              </html>`);
    console.log(`[Version ${version}]: New request => http://${hostname}:${port}${req.url}`);
});

app.listen(port, hostname, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
});
