var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  handleClick: function() {
    this.model.select();
  }

});
