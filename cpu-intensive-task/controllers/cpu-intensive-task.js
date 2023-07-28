const { CPU } = require('../procedure/cpu-intensive-task');

const cpuController = (req, res) => {
    const method = req.method;
    switch(method) {
        case "GET":
            CPU.getComputation(req, res);
            break;
        default:
            res.writeHead(405, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({detail: 'Method not allowed'}));
            res.end();
    }
}

module.exports = { cpuController };