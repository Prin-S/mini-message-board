const path = require('path');
const express = require('express');
const app = express();
const newMessageRouter = require('./routes/newMessageRouter');
const indexRouter = require('./routes/indexRouter');
const links = require('./links');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// https://expressjs.com/en/api.html#express.urlencoded
// So that "A new `body` object containing the parsed data is populated on the `request` object after the middleware (i.e. `req.body`)"
app.use(express.urlencoded({ extended: true }));

app.use('/new', newMessageRouter);
app.use('/', indexRouter);

app.get('/{*splat}', (req, res) => {
  throw new Error('Page');
});

app.use((err, req, res, next) => {
  res.status(404).render('404', { links, err });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${PORT}`);
});