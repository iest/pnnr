App.Post = Ember.Object.extend({
  url: function() {
    return encodeURIComponent(this.get('u'));
  }.property('u')
});

module.exports = App.Post;