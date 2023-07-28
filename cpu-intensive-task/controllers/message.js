const { Message } = require('../procedure/message');

const messageController = (req, res) => {
    const method = req.method;

    switch(method) {
        case "POST":
            Message.postMessage(req, res);
            break;
        case "GET":
            Message.getMessage(req, res);
            break;
        case "PATCH":
            Message.patchMessage(req, res);
            break;
        case "DELETE":
            Message.deleteMessage(req, res);
            break;
        default:
            res.writeHead(405, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({detail: 'Method not allowed'}));
            res.end();
    }
}

module.exports = { messageController };