//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
//const QuotePostSchema = require('./model/quotePost');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/api');
app.use(express.static('build'));
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/quoteDB',
  {
    useNewUrlParser: true,
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
