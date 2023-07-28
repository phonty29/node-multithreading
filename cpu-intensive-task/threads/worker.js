const threads = require('worker_threads');

const num = threads.workerData.number;
const sum = {value: 0};
for (let i = 1; i<=num; i++) {
    sum.value+= i**2; 
}

threads.parentPort.postMessage({sum});

