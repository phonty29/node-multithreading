const threads = require('worker_threads');

console.log("I am worker, and my workerData is", threads.workerData);

threads.parentPort.postMessage("I am worker, and here is my pessage to parent");

