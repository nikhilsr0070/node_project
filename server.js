'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';
var { getinfo} = require("./service");
// App
const app = express.json();
app.get('/', (req, res) => {
  res.send('Welcome, This is Donkey');
});
app.get('/:id',getinfo)
// App
app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
