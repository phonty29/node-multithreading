const threads = require('worker_threads');

const start_index = threads.workerData.start_index;
const end_index = threads.workerData.end_index;
const sum = {value: 0};
for (let i = start_index; i<=end_index; i++) {
    sum.value+= i**2; 
}

threads.parentPort.postMessage({sum});

