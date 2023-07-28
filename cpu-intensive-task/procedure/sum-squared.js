const threads = require('worker_threads');
const { createWorker, thread_amount } = require('../utils/createWorker');
const { Worker } = threads;

class SumSquared {
    static #getParameterNumber(req) {
        const params = req.url.split('/');
        return params[params.length-1]; 
    }

    static async getComputation(req, res) {
        const number = this.#getParameterNumber(req);
        const asyncWorkers = [];
        for (let i=1; i <= thread_amount; i++) {
            asyncWorkers.push(createWorker({
                start_index: (number/thread_amount-1)*i+1,
                end_index: (number/thread_amount)*i,
                response: res
            }));
        }
        const thread_results = await Promise.all(asyncWorkers);
        const sum = {
            value: thread_results[0] + thread_results[1] + thread_results[2] + thread_results[3]
        }
        res.write(JSON.stringify({result: sum.value}));
        res.end();
    }
}

module.exports = { SumSquared };