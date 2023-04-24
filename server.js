require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');
const { db_connect } = require('./utils/db');
//Environment vars
const PORT = process.env.PORT || 3000;

//Routers
// const indexRouter = require('./routes/index');
// const inventoryRouter = require('./routes/inventory');
// const usersRouter = require('./routes/users');
// const authRouter = require('./routes/auth');


const app = express();

// CORS 
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
//Use react for views
app.use(express.static(path.join(__dirname, "client", "dist")));
//Express Middleware
app.use(logger("dev"));
app.use(express.json({})); //Use json instead of html
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Connect to database
db_connect();

//Routes
// app.use('/api/inventory', inventoryRouter);
// app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: err.status || 500,
  });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

module.exports = app;