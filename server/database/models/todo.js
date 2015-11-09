var db = require('../config');

var ToDo = db.Model.extend({
  tableName: 'todoitems',
  hasTimestamps: true
});

module.exports = ToDo;
