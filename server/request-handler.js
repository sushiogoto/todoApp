var path = require('path');
var url = require('url');
var helpers = require('./http-helpers');
var ToDoItems = require('./database/collections/todoitems');
var ToDo = require('./database/models/todo');

var actions = {
  'GET': function(request, response) {
    var urlPath = url.parse(request.url).pathname;

    if (urlPath === '/') { urlPath = '/index.html'; }

    helpers.serveAssets(response, urlPath, function() {
      console.log('served');
      if (urlPath[0] === '/') { urlPath = urlPath.slice(1);}

    });
  },
  'POST': function(request, response) {
    helpers.collectData(request, function (data) {
      ToDoItems.create({
        item: data.item
      })
      .then(function(newItem) {
        res.send(200, newItem);
      });
    });
  }
};

exports.handleRequest = function(req, res) {
  var handler = actions[req.method];
  if(handler) {
    handler(req, res);
  } else {
    helpers.send404(response);
  }
};