var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(this.collection);
  },


  render: function() {
    this.$el.html(this.template());
    console.log(this.collection);
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
  },

  template: templateURL('src/templates/app.html')

});