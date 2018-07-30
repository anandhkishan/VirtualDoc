import Route from '@ember/routing/route';
import model from 'ember-data/model';

export default Route.extend({
  beforeModel(){
    
  var user = localStorage.getItem("loggedin")
  if (user === "null" || user==undefined)
      this.transitionTo('home.signin');
  else if (JSON.parse(user).role == "ROLE_PATIENT")
      this.transitionTo('pdashboard');
  else if (JSON.parse(user).role == "ROLE_DOCTOR")
      this.transitionTo('d-dashboard');
  else if (JSON.parse(user).role == "ROLE_ADMIN")
      this.transitionTo('admin-dashboard');
      console.log(localStorage.getItem("loggedin"));


    },
    setupController: function(controller, model){
        controller.set('username', JSON.parse(localStorage.getItem("loggedin")).username);
    }
       

});
