const db = require('mongoose');

db.Promise = global.Promise;
// mongodb+srv://db_user_mf:pyv99439E861Ukq0@cluster0-aprtj.mongodb.net/telegrom?retryWrites=true&w=majority
async function connect(url) {
  await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = connect;