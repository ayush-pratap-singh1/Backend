const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';  
        req.on('data', chunk => {
            body += chunk.toString(); 
        }); 
        req.on('end', () => {
            const parsedBody = querystring.parse(body);
            const name = parsedBody.name;
            const password = parsedBody.password;
            console.log(⁠ Received Name: ${name}, Password: ${password} ⁠);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            console.log(parsedBody)
            res.end('Form submission received');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }

});

server.listen(PORT, HOSTNAME, () => {
    console.log(⁠ Server running at http://${HOSTNAME}:${PORT}/ ⁠);
});                    
