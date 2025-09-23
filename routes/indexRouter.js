const express = require('express');
const indexRouter = express.Router();

const messages = [
  {
    text: 'Woof, woof!',
    user: 'Maggi',
    added: new Date()
  },
  {
    text: 'Haw, haw!',
    user: 'Pipo',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Prin',
    added: new Date()
  },
  {
    text: 'Hi Mars!',
    user: 'Pah',
    added: new Date()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages });
});

module.exports = indexRouter;