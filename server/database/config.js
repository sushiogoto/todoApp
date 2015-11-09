var Bookshelf = require('bookshelf');
var path = require('path');
var mysql = require('mysql');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'yo',
    database: 'tododb',
    charset: 'utf8'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('todoitems').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('todoitems', function (todo) {
      todo.increments('id').primary();
      todo.string('item', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/************************************************************/
// Add additional schema definitions below
/************************************************************/

module.exports = db;