const express = require('express');
const newMessageRouter = express.Router();
const links = require('../links');

newMessageRouter.get('/', (req, res) => {
  res.render('form', { links });
});

module.exports = newMessageRouter;