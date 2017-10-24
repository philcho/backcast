var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    const vid = new VideoListEntryView({model: video});
    this.$('.video-list').append(vid.render());
  },

  template: templateURL('src/templates/videoList.html')

});
