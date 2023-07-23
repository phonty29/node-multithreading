const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write('Hello Browser, I am a Node server');
    res.end();
});

server.listen(port, () => {
    console.log(`Server started at ${port}`);
});