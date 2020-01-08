const Model = require('./model');

console.log('[db] Successfully connected');

function addUser(user){
  const myUser = new Model(user);
  return myUser.save();
}

function getUsers(){
  //   let filter = {};
  // if (filterUser) {
  //   filter = { user: filterUser };
  // }
  // const messages = await Model.find(filter);
  // return messages;
  return Model.find();
}

module.exports = {
  add: addUser,
  get: getUsers
};
