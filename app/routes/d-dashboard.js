import Route from '@ember/routing/route';
// import { Ember } from 'ember';
var user = localStorage.getItem("loggedin");
export default Route.extend({
   category:"",
    beforeModel(){
    
       
        if (user === "null" || user==undefined)
            this.transitionTo('home.signin');
        else if (JSON.parse(user).role == "ROLE_PATIENT")
            this.transitionTo('pdashboard');
        else if (JSON.parse(user).role == "ROLE_DOCTOR")
            this.transitionTo('d-dashboard');
        else if (JSON.parse(user).role == "ROLE_ADMIN")
            this.transitionTo('pdashboard');
            console.log(localStorage.getItem("loggedin"));
      
      
          },
        
    model(){
    //    // store.findRecord('post', {: 'all'});
    //     return this.store.findRecord('doctor',JSON.parse(localStorage.getItem("loggedin")).username).then(result=>{
    //         console.log("hello world",result.get('category'))
    //         
    //     })
    //     console.log("asdxczxcqezca",category)
    return this.store.findAll('message');
        
    },
    setupController: function(controller, model){
        controller.set('name', JSON.parse(localStorage.getItem("loggedin")).name);
        this.store.findAll('message').then(messages => {
            controller.set('messages', messages.uniqBy("patientId"));
            });
    }
    
});
