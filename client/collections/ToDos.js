var ToDos = Backbone.Collection.extend({

  model: ToDoModel,

  url: 'http://localhost:3000/todos',

  initialize: function() {
  }

});