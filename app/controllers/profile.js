import Controller from '@ember/controller';

export default Controller.extend({
    username:JSON.parse(localStorage.getItem("loggedin")).username,
    docOrPat:true,
    role:"",
    name:JSON.parse(localStorage.getItem("loggedin")).name,
    init(){
            if(JSON.parse(localStorage.getItem("loggedin")).role == "ROLE_PATIENT"){
            this.set("role","Patient");
            this.set("docOrPat",false);
            }
            if(JSON.parse(localStorage.getItem("loggedin")).role == "ROLE_DOCTOR"){
                this.set("role","Doctor");
                this.set("docOrPat",true);
            }
            
    }
});
