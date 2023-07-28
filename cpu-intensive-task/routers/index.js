const { messageController } = require('../controllers/message');
const { cpuController } = require('../controllers/cpu-intensive-task');
const { getDynamicRoute } = require('../utils/handleDynamicRoutes');

const router = (req, res) => {
    const url = req.url;
    switch(getDynamicRoute(url)) {
        case '/api/message':
            messageController(req, res);
            break;
        case '/api/cpu-intensive-task/:n':
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