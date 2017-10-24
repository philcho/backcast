var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
    this.collection.on('sync', this.setDefaultVideo, this);
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    if (this.collection.length > 0) {
      this.$el.html(this.template(this.collection.selected && this.collection.selected.attributes || this.collection.models[0].attributes));
    }
    return this.$el;
  },

  setDefaultVideo: function() {
    this.collection.at(0).select();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
