const express = require('express');
const indexRouter = express.Router();
const links = require('../links');

let id = 0;
const increaseId = () => id += 1;

const messages = [
  {
    text: 'Woof, woof! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis vitae neque quis posuere. Aliquam erat volutpat. Curabitur placerat odio eget turpis laoreet lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    user: 'Maggi',
    added: new Date(),
    id: increaseId()
  },
  {
    text: 'Haw, haw! Donec dui elit, mollis quis rutrum ac, fermentum vel dui. Pellentesque ultrices et ligula ac sollicitudin. Aenean sodales vehicula ante. Aenean erat turpis, pulvinar eu lectus a, sollicitudin euismod leo. Phasellus maximus tristique velit id ullamcorper. Maecenas vestibulum lorem ac enim sollicitudin rutrum.',
    user: 'Pipo',
    added: new Date(),
    id: increaseId()
  },
  {
    text: 'Hello World! Vestibulum hendrerit cursus ipsum, nec venenatis velit volutpat at. Duis suscipit blandit mi, elementum venenatis nunc feugiat quis. Nunc mollis, nibh pulvinar convallis lobortis, mauris ex pharetra est, ac pharetra nibh enim eu massa.',
    user: 'Prin',
    added: new Date(),
    id: increaseId()
  },
  {
    text: 'Hi Mars! Donec vel pretium enim. Vestibulum id eros sit amet justo ornare tempus. Maecenas ac massa nec nibh aliquet auctor eu et risus. Fusce rhoncus malesuada nisl, sit amet tempus dui rhoncus ac. Nullam facilisis, libero eget vehicula malesuada, neque enim lacinia sem, ac tempor nibh eros a justo.',
    user: 'Pah',
    added: new Date(),
    id: increaseId()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', { links, messages });
});

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: new Date(), id: increaseId() });
  res.redirect('/'); // Return to home after submitting the form.
});

indexRouter.get('/:id', (req, res) => {
  const msgId = req.params.id
  res.render('message', { msgId, links, messages });
});

module.exports = indexRouter;