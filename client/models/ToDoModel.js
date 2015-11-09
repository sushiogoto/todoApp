var ToDoModel = Backbone.Model.extend({

  url: 'http://localhost:3000/todos',

  initialize: function() {

  },

  add: function() {
    console.log('meow');
  }

});