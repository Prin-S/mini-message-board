const express = require('express');
const newMessageRouter = express.Router();

newMessageRouter.get('/', (req,res) => {
  res.send('new message test');
});

module.exports = newMessageRouter;