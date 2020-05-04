const messages = [];

module.exports.messages = messages;

module.exports.Message = class {
    constructor({ message, date }) {
        this.message = message;
        this.date = date;
    }

    toJSON() {
        let { date, message } = this;
        return { date, message };
    }
};

module.exports.addMessage = (message) => this.messages.push(message);
