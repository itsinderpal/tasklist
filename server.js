require('dotenv').config();
const express = require('express');
const app = express();
require('./config/mongoose');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
const indexRouter = require('./routes/index.route.js');

app.use('/', indexRouter);

app.listen(process.env.PORT || 3001);
