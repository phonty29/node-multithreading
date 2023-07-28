class CPU {
    static #getParameterNumber(req) {
        const params = req.url.split('/');
        return params[params.length-1]; 
    }

    static getComputation(req, res) {
        const num = this.#getParameterNumber(req);
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        const sum = {value: 0};
        for (let i = 1; i <= num; i++) {
            sum.value+= i**2;
        }
        res.write(JSON.stringify({result: sum.value}));
        res.end();
    }
}

module.exports = { CPU };