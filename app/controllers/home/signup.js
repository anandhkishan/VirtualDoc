import Controller from '@ember/controller';

export default Controller.extend({
responseMessage:true,
swapPages:true,
actions:{
    docSignup(){
      this.set("responseMessage",false);
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
