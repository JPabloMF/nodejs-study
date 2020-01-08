const store = require('./store');

function addUser(name) {
  if(!name){
    return Promise.reject('Data is incorrect.');
  }
  const user = {
    name
  }
  return store.add(user);
}

function getUsers(){
  return store.get();
}

module.exports = {
  addUser,
  getUsers
};
