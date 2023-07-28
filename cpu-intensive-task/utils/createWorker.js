const threads = require('worker_threads');
const { Worker } = threads;
const thread_amount = 4;

const createWorker = ({start_index, end_index, response}) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./threads/worker.js', {
            workerData: { thread_amount, start_index, end_index }
        })
        worker.on('message', (data) => {
            res(data.sum.value);
        });
        worker.on('error', (msg) => {
            rej(`Error message is ${data}`);
        });
    })
}

module.exports = { createWorker, thread_amount };