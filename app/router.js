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
  this.route('pdashboard',{ path: '/pdashboard' }, function() {
    this.route('general');
    this.route('dbp');
    this.route('cardio');
    this.route('stress');
    this.route('obese');
  });
  this.route('home',{path:'/'}, function() {
    this.route('signin');
    this.route('signup');
    this.route('signup-doc');
    this.route('signup-pat');
  });

  this.route('index');
  this.route('d-dashboard');
  this.route('profile');
  this.route('admin-dashboard');
});

export default Router;
