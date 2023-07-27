const { messageController } = require('../controllers/message');
const { cpuController } = require('../controllers/cpu-intensive-task');

const router = (req, res) => {
    const url = req.url;
    switch(url) {
        case '/api/message':
            messageController(req, res);
            break;
        case '/api/cpu-intensive-task':
            cpuController(req, res);
            break;
        default: 
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({detail: 'Resource not found'}));
            res.end();
    }
}

module.exports = {
    router
};