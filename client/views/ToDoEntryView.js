var ToDoEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td><%= item %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});