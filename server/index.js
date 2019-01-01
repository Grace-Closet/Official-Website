require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var React = require('react');
var ReactDOM = require( 'react-dom/server');
const Layout = require('./templates/layout');


var app = express();
app.use(express.static(__dirname + '/../client/dist'));

let PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// kill $(lsof -t -i:3001)