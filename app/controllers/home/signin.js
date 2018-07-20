import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
export default Controller.extend({
  emailAddress:'',
  password:'',
  responseMessage:'',
  actions: {
    signInDetails(){
      const email = this.get("email");
      const passwd = this.get("password");
      const dataRecord = this.store.createRecord('login',{email: email,password:passwd });
      dataRecord.save().then(response => {
             this.transitionToRoute('pdashboard');
           });
    }
  }
});
