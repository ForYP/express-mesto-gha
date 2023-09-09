const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URL);

app.use((req, res, next) => {
  req.user = {
    _id: '64fa07d01d0676b353deb9a6', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
