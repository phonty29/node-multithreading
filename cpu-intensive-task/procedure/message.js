class Message {
    static #sendResponse(res, message) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify({message}));
    }

    static getMessage(req, res) {
        this.#sendResponse(res, 'Э котакбас бля амынды шыгарам пидарас');

    }

    static postMessage(req, res) {
        this.#sendResponse(res, 'У нас нет Базы Данных, но скоро добавим =)')
    }
    
    static patchMessage(req, res) {
        this.#sendResponse(res, 'У нас нет Базы Данных, но скоро добавим =)')
    }

    static deleteMessage(req, res) {
        this.#sendResponse(res, 'У нас нет Базы Данных, но скоро добавим =)')
    }
}

module.exports = { Message };