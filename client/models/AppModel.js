var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    // this.set('toDoList', new ToDoModel());
    this.set('toDos', new ToDos());
  },
});