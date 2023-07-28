const threads = require('worker_threads');
const { Worker } = threads;

class SumSquared {
    static #getParameterNumber(req) {
        const params = req.url.split('/');
        return params[params.length-1]; 
    }

    static getComputation(req, res) {
        const number = this.#getParameterNumber(req);
        const worker = new Worker('./threads/worker.js', {
            workerData: { number }
        });
        worker.on('message', (data) => {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({result: data.sum.value}));
            res.end();
        });
        worker.on('error', (msg) => {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.write(JSON.stringify({message: 'Error during calculation'}));
            res.end();
        })
    }
}

module.exports = { SumSquared };