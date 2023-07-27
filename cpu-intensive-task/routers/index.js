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
            errorController(req, res);
    }
}

module.exports = {
    router
};