var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function() {
    this.on('select', this.select);
  },

  select: function(e) {
    this.selected = e;
  },

  search: function(q = 'dogs') {
    this.fetch({
      data: {
        part: 'snippet',
        q: q,
        key: window.YOUTUBE_API_KEY,
        maxResults: 5 
      },
      success: data => {
        this.selected = data.models[0];
        data.models[0].select();
      }
    });
  },

  parse: function(data) {
    return data.items;
  }

});
