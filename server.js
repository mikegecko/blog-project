require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser');
const { db_connect } = require('./utils/db');
//Environment vars
const PORT = process.env.PORT || 3000;

//Routers
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
// const usersRouter = require('./routes/users');

const app = express();
app.set('maxHeaderSize', 10485760);
// CORS 
app.use(cors({
  origin: '*', // Change to origin: ['https://example.com', 'https://another.example.com']
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  limit: '10mb',
}));
//Use react for views
app.use(express.static(path.join(__dirname, "client", "dist")));
//Express Middleware
app.use(logger("dev"));
app.use(express.json({})); //Use json instead of html
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

//Connect to database
db_connect();

//Routes
app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/posts', postsRouter);
// app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // check if headers have already been sent
  if(res.headersSent) {
    return next(err); // skip default error handler
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    status: err.status || 500,
  });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
module.exports = app;