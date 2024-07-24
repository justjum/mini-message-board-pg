const db = require("../db/queries");

async function indexGet(req, res, next) {
    const messages = await db.getAllMessages();
    console.log(messages);
    res.render('index', { 
        title: 'Mini Message Board',
        messages: messages
     });
}

async function indexPost(req, res, next) {
    
}

async function createMessageGet(req, res, next) {
    res.render('create', {
        title: 'Create Your Message'
    })
}

async function createMessagePost(req, res, next) {
    console.log(req.body)
    await db.insertMessage(req.body.username, req.body.message)
    res.redirect('/')
}

async function deleteMessageGet(req, res, next) {
    const message = await db.getMessage(req.params.id);
    console.log(message[0])
    res.render('delete', {
        title: 'Delete Message',
        message: message,
    })
}

async function deleteMessagePost(req, res, next) {
    await db.deleteMessage(req.body.id);
    res.redirect('/')
}

module.exports = {
    indexGet,
    indexPost,
    createMessageGet,
    createMessagePost,
    deleteMessageGet,
    deleteMessagePost,
}