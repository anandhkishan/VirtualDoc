import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('navbar');
  this.route('pdashboard');
  this.route('home', function() {
    this.route('signin');
    this.route('signup');
  });
  this.route('home',{path:'/'});
  this.route('index');
});

export default Router;
