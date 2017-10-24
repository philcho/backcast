var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    console.log(this.model);
  },

  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
