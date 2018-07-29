import Controller from '@ember/controller';

export default Controller.extend({



responseMessage:true,
swapPages:true,
categLabel:"category",
category:"",
actions:{
    docSignup(){
      this.set("responseMessage",false);
    },generalDD(){
        this.set("categLabel","General");
        this.set("category","general");
    },dbpDD(){
        this.set("categLabel","Diabetes and Blood Pressure");
        this.set("category","dbp");
    },
    heartDD(){
        this.set("categLabel","Heart-related");
        this.set("category","heart");
    },
    stressDD(){
        this.set("categLabel","Stress-Management");
        this.set("category","stress");
    },
    signupDoc() {
      console.log("entered");
      if (this.get('name2') != undefined && this.get('email2') != undefined && this.get('username2') != undefined && this.get('password2') != undefined && this.get('cpassword2') != undefined && this.get("category")) {
          if (this.get('password2') === this.get('cpassword2')) {
  
              let rec = this.store.createRecord('doctor', { name: this.get('name2'), username: this.get('username2'), email: this.get('email2'), password: this.get('password2'),category:this.get('category') })
              rec.save().then((result) => {
                  console.log(result)
                  this.transitionToRoute("home.signin")
              }).catch((err)=>{
                  console.log("test", err);
                  alert("please enter valid credentials")
              })
          }
          else {
              alert("Verify password and confirm password")
          }
      }
      else {
          alert("Please fill all the details")
      }
  
  },
  signupPat(){
    if (this.get('name3') != undefined && this.get('email3') != undefined && this.get('username3') != undefined && this.get('password3') != undefined && this.get('cpassword3') != undefined) {
        if (this.get('password3') === this.get('cpassword3')) {

            let rec = this.store.createRecord('signup', { name: this.get('name3'), username: this.get('username3'), email: this.get('email3'), password: this.get('password3') })
            rec.save().then((result) => {
                console.log(result)
                this.transitionToRoute("home.signin")
            }).catch((err)=>{
                console.log("test", err);
                alert("please enter valid credentials")
            })
        }
        else {
            alert("Verify password and confirm password")
        }
    }
    else {
        alert("Please fill all the details")
    }

  },
  transitionToLogin: function (result) {
      console.log(result)
  },
    
    patSignup(){
      this.set("responseMessage",false);
      this.set("swapPages",false);
    },
    goBack1(){
      this.set("responseMessage",true);
      this.set("swapPages",true);
    },
    goBack2(){
      this.set("responseMessage",true);
      this.set("swapPages",true);
    }
}
});
