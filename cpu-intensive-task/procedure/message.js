class Message {
    static #sendResponse(res, message) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify({message}));
        res.end();
    }

    static getMessage(req, res) {
        this.#sendResponse(res, 'Э котакбас э бля сука амынды шыгарам мал');

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