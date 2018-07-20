import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress:'',
  password:'',
  actions: {
    signInDetails(){
      const email = this.get("email");
      const passwd = this.get("password");
      const dataRecord = this.store.createRecord('login',{email: email,password:passwd });
      dataRecord.save().then(response => {
            this.set('name', rname);
             console.log("transfer is success");
             this.transitionToRoute('pdashboard');
           });
    }
  }
});
