import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  auth: service('authentication'),
  username: Ember.computed(function(){
    let user = localStorage.getItem("loggedin");
    let username = JSON.parse(user).username
    console.log(username);
    return username;
}),
  actions:{
   

        logout(){
            this.get('auth').logout().then((result)=>{

                this.get('router').transitionTo('home.signin');
                alert(result);
            })
        },
        moveToProfile(){
            this.get('router').transitionTo("profile");
        }

    }
});
