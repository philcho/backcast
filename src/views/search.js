var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleClick',
    'keyup input': 'handleKeypress'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html'),

  handleClick: function(e) {
    let inputEl = $('input');
    let query = inputEl.val();
    this.collection.search(query);
    inputEl.val('');
  },

  handleKeypress: function(e) {
    if (e.keyCode === 13) {
      let inputEl = $('input');
      let query = inputEl.val();
      this.collection.search(query);
      inputEl.val('');
    }
  }

});
