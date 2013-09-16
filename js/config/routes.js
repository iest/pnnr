var App = require('./app');

App.Router.map(function() {
  this.route('post', { path: '/:articleURL' });
});