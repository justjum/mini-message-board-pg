const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getMessage(messageID) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [messageID])
    return rows;
}

async function insertMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message])
}

async function deleteMessage(messageID) {
    await pool.query("DELETE FROM messages WHERE id = ($1)", [messageID])
}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage,
    deleteMessage
}