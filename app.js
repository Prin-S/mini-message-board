const express = require('express');
const app = express();
const newMessageRouter = require('./routes/newMessageRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/new', newMessageRouter);
app.use('/', indexRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${PORT}`);
});