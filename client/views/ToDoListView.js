var ToDoListView = Backbone.View.extend({

  tagName: 'table',

  className: 'to-dos',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Today\'s to dos</th>').append(
      this.collection.map(function(todo) {
        return new ToDoEntryView({
          model: todo
        }).render();
      }));
  }
});