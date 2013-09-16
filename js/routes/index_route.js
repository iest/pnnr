var IndexRoute = Ember.Route.extend({
  model: function() {
    return $.ajax({
      url: 'http://feeds.pinboard.in/json/u:iest',
      jsonp: 'cb',
      dataType: 'jsonp'
    })
      .then(function(response) {
        var allPosts = [];

        response.forEach(function(item, index, array){
          var newPost = App.Post.create(item);
          allPosts.addObject(newPost);
        });

        return allPosts;
      });
  }
});

module.exports = IndexRoute;