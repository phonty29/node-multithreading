const { SumSquared } = require('../procedure/sum-squared');

const sumSquaredController = (req, res) => {
    const method = req.method;
    switch(method) {
        case "GET":
            SumSquared.getComputation(req, res);
            break;
        default:
            res.writeHead(405, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({detail: 'Method not allowed'}));
            res.end();
    }
}

module.exports = { sumSquaredController };