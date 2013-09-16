var PostRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('url', decodeURIComponent(model.articleURL));
  }
});

module.exports = PostRoute;

