var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.collection);
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    const vid = new VideoListEntryView({model: video});
    this.$el.append(vid.render());
  },

  template: templateURL('src/templates/videoList.html')

});
