var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.on('select', this.test);
  },

  test: function(e) {
    this.selected = e;
  }

});
