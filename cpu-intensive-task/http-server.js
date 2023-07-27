const http = require('http');
const { router } = require('./routers')

const port = process.env.PORT || 8080;

const server = http.createServer(router);

server.listen(port, () => {
    console.log(`Server started at ${port}`);
});