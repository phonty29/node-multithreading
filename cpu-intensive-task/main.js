const threads = require('worker_threads');

const { Worker } = threads;

const worker = new Worker('./threads/worker.js', {
    workerData: {
        number: 10 
    }
});

worker.on('message', (...args) => {
    console.log(args[0].sum.value);
});