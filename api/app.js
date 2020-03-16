/* eslint-disable quotes */
const express = require("express");
const cors = require("cors");
const BooksRouter = require("./BooksRouter");

const app = express();

app.use(cors());

app.use("/api/books", BooksRouter);

module.exports = app;
