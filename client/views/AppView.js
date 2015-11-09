var AppView = Backbone.View.extend({
  initialize: function (params) {
    this.toDoListView = new ToDoListView({
      collection: this.model.get('toDoList')
    });

    this.render();
  },

  events: {
    'submit': function(params) {
      console.log(params);
      this.toDoListView.collection.on('');
    }
  },

  render: function () {
    return this.$el.append([
      this.toDoListView.$el
    ]);
  }
});