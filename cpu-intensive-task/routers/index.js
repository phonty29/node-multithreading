const { messageController } = require('../controllers/message');
const { sumSquaredController } = require('../controllers/sum-squared');
const { getDynamicRoute } = require('../utils/handleDynamicRoutes');

const router = (req, res) => {
    const url = req.url;
    switch(getDynamicRoute(url)) {
        case '/api/message':
            messageController(req, res);
            break;
        case '/api/sum-squared/:n':
            sumSquaredController(req, res);
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