const router = require('express').Router();
const Message = require('../message');

router.get('/', async (req, res) => {
    const messages = []
    for(const message of Message.messages){
        messages.push(message.toJSON())
    }
    return res.send(messages);
});

module.exports = router;
