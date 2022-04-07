"use strict";

require('dotenv').config()
const express = require('express');
const router = require('./router')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(router); // apply router

app.listen(PORT, () => {  // initialize server
  console.log(`I am up and running at http://localhost:${PORT}`);
});