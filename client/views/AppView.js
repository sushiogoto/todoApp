var AppView = Backbone.View.extend({
  initialize: function (params) {
    this.toDoListView = new ToDoListView({
      collection: this.model.get('toDoList')
    });

    this.render();
  },

  events: {
    'submit #send': 'handleSubmit'

    // function() {
    //   var item = $('#item').val();
    //   // this.toDoListView.collection.on('');
    //   debugger;
    //   this.toDoListView.collection({
    //       beforeSend: function (xhr) {
    //         xhr.setRequestHeader('Content-Type', 'application/json');
    //       },

    //       data: JSON.stringify({item: item}),

    //       type: 'POST',

    //       success: function (data) {
    //         // self.render();
    //       }
    //   });
    // }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var $item = this.$('#item');
    this.toDoListView.collection.create({
      item: $item.val()
    });
    $item.val('');
  },

  render: function () {
    return this.$el.append([
      this.toDoListView.$el
    ]);
  }
});