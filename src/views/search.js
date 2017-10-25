var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleClick',
    'keyup input': 'handleKeypress',
    'click .video-list': 'swapList'
  },

  initialize: function() {
    // this.collection.on('select', this.swapList, this);
    this.searchCollection = {};
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
    let inputEl = $('input');

    if (e.keyCode === 13) {
      let query = inputEl.val();
      this.collection.search(query);
      inputEl.val('');
    } else {
      let searchResults = new Videos();
      searchResults.search(inputEl.val());
      new VideoListView({el: this.$('.live-results'), collection: searchResults}).render();
      this.searchCollection = searchResults;
    }
  },

  swapList: function(e) {
    let searchResults = new Videos();
    searchResults.search($('input').val());
    new VideoListView({el: $('.list'), collection: searchResults}).render();
    new VideoPlayerView({el: $('.player'), collection: this.searchCollection}).render();
    $('.video-list').remove();
    $('input').val('');
  }

});
