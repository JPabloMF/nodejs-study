const store = require('./store');

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error(`[messageController] There isn't an user or a message`);
      return reject('Data is incorrect.');
    }
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date()
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      return reject('Data is incorrect.');
    }
    const res = await store.updateMessage(id, message);
    resolve(res);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject('Invalid Id');
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
