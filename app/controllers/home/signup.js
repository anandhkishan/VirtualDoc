import Controller from '@ember/controller';

export default Controller.extend({
  name:"",
  email:'',
  password:'',
  username:'',
  actions:{
    signupDetails(){
      const rname = this.get("name2");
      const remail = this.get("email2");
      const rpassword = this.get("password2");
      const rusername = this.get("username2");
      const dataRecord2 = this.store.createRecord('signup', { name: rname,email:remail,password:rpassword,username:rusername });
      dataRecord2.save().then(response => {
             console.log("transfer is success");
             this.transitionToRoute('/home/signin');
           });
    }
  }
});