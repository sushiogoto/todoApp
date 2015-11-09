var http = require("http");

var handler = require('./request-handler');
var utils = require('./utils');
var url = require('url');
var mysql = require('mysql');
var db = require('./database/config');

var port = 3000;

var ip = "127.0.0.1";

// var router = {
//   '/todos/': todos.requestHandler
// };

var server = http.createServer(handler.handleRequest);

server.listen(port, ip);