const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
  const filterMessages = req.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.post('/', function(req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(
        req,
        res,
        'Invalid information',
        400,
        'Error in controller'
      );
    });
});

router.patch('/:id', function(req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.delete('/:id', function(req, res) {
  controller.deleteMessage(req.params.id).then(()=>{
    response.success(req, res, `User ${req.params.id} deleted.`, 201);
  }).catch((err)=>{
    response.error(req, res, 'Unexpected error', 500, err);
  })
});

module.exports = router;
