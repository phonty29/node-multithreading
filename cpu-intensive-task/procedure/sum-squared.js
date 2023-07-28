const { createWorker } = require('../utils/createWorker');
const thread_amount = 4;

class SumSquared {
    static #getParameterNumber(req) {
        const params = req.url.split('/');
        return +params[params.length-1]; 
    }

    static async getComputationWithThreads(req, res) {
        const number = this.#getParameterNumber(req);
        const asyncWorkers = [];
        for (let i=1; i <= thread_amount; i++) {
            asyncWorkers.push(createWorker({
                start_index: (number/thread_amount)*(i-1)+1,
                end_index: (number/thread_amount)*i,
            }));
        }
        const thread_results = await this.#getWorkerResults({asyncWorkers, res});
        const sum = {
            value: thread_results[0] + thread_results[1] + thread_results[2] + thread_results[3]
        }
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.stringify({result: sum.value}));
        res.end();
    }

    static getComputationWithoutThreads(req, res) {
        const number = this.#getParameterNumber(req);
        const sum = {value: 0};
        for (let i=0; i <= number; i++) {
            sum.value+= i**2;
        }
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.stringify({result: sum.value}));
        res.end();
    }

    static async #getWorkerResults({asyncWorkers, res}) {
        try {
           return await Promise.all(asyncWorkers); 
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: 'Error during computations in thread'}));
            res.end();
        }
    }
}

module.exports = { SumSquared };