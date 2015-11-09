var db = require('../config');
var ToDo = require('../models/todo');

var ToDoItems = new db.Collection();

ToDoItems.model = ToDo;

module.exports = ToDoItems;