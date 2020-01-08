const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');

db(
  'mongodb+srv://db_user_mf:pyv99439E861Ukq0@cluster0-aprtj.mongodb.net/telegrom?retryWrites=true&w=majority'
);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('The app is working on http://localhost:3000');
