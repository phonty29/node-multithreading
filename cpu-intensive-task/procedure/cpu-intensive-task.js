class CPU {
    static getComputation(res, N) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        const sum = {value: 0};
        for (let i = 1; i <= N; i++) {
            sum.value+= i**2;
        }
        res.write(JSON.stringify({result: sum.value}));
        res.end();
    }
}

module.exports = { Fibonacci };