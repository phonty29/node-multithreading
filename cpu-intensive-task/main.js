const threads = require('worker_threads');

const { Worker } = threads;

const worker = new Worker('./threads/worker.js', {
    workerData: {
        message: 'Hello from parent to worker'
    }
});

worker.on('message', (...args) => {
    console.log({args});
});