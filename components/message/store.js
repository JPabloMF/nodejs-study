const Model = require('./model');

console.log('[db] Successfully connected');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate('user')
      .exec((error,populated)=>{
        if(error){
          return reject(error);
        }
        resolve(populated)
      });
  });
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({ _id: id });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage,
  remove: removeMessage
};
