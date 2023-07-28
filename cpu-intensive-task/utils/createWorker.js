const threads = require('worker_threads');
const { Worker } = threads;

const createWorker = ({start_index, end_index}) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./threads/worker.js', {
            workerData: { start_index, end_index }
        })
        worker.on('message', (data) => {
            res(data.sum.value);
        });
        worker.on('error', (msg) => {
            rej(`Error message is ${msg}`);
        });
    })
}

module.exports = { createWorker };