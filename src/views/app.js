var AppView = Backbone.View.extend({

  el: '#app',
  url: 'https://www.googleapis.com/youtube/v3/search',
  

  initialize: function() {
    this.videos = new Videos();
    this.videos.search();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
  },

  template: templateURL('src/templates/app.html')

});