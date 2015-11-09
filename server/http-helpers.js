var path = require('path');
var fs = require('fs');
var Promise = require('bluebird');

exports.headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.paths = {
  siteAssets: path.join(__dirname, '../client/')
};

var readFile = Promise.promisify(fs.readFile);
exports.serveAssets = function(res, asset, callback) {

  var encoding = { encoding: 'utf8' };
  return readFile(exports.paths.siteAssets + asset, encoding)
    .then(function(contents) {
      contents && exports.sendResponse(res, contents);
    });
  };



exports.sendRedirect = function(response, location, status) {
  status = status || 302;
  response.writeHead(status, {Location: location});
  response.end();
};

exports.sendResponse = function(response, obj, status) {
  status = status || 200;
  response.writeHead(status, exports.headers);
  response.end(obj);
};

exports.collectData = function(request, callback) {
  var data = "";
  request.on("data", function(chunk) {
    data += chunk;
  });
  request.on("end", function() {
    callback(data);
  });
};

exports.send404 = function(response) {
  exports.sendResponse(response, '404: Page not found', 404);
};