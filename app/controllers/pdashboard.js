import Controller from '@ember/controller';

export default Controller.extend({
    generalVal:false,
    dbpVal:false,
    heartVal:false,
    stressVal:false,
    chatinit:false,
    // username: localStorage.getItem("loggedin"),
    actions:{
        general(){
            this.set("generalVal",true);
            this.set("dbpVal",false);
            this.set("heartVal",false);
            this.set("stressVal",false);
            localStorage.setItem("typeCat","general");
            localStorage.setItem("chatPatientid",JSON.parse(localStorage.getItem("loggedin")).id)
            console.log("general");
        },

        DBP(){
            this.set("generalVal",false);
            this.set("dbpVal",true);
            this.set("heartVal",false);
            this.set("stressVal",false);
            localStorage.setItem("typeCat","DBP");
            localStorage.setItem("chatPatientid",JSON.parse(localStorage.getItem("loggedin")).id)
            console.log("DBP");
        },
        heart(){
            this.set("generalVal",false);
            this.set("dbpVal",false);
            this.set("heartVal",true);
            this.set("stressVal",false);
            localStorage.setItem("typeCat","heart");
            localStorage.setItem("chatPatientid",JSON.parse(localStorage.getItem("loggedin")).id)
            console.log("heart");
        },
        stress(){
            this.set("generalVal",false);
            this.set("dbpVal",false);
            this.set("heartVal",false);
            this.set("stressVal",true);
            localStorage.setItem("typeCat","stress");
            localStorage.setItem("chatPatientid",JSON.parse(localStorage.getItem("loggedin")).id)
            console.log("stress");
        },generalChat(){
            this.set("chatinit",true);

        },DBPChat(){
            this.set("chatinit",true);
           

        },heartChat(){
            this.set("chatinit",true);


        },stressChat(){
            this.set("chatinit",true);

        },goBack(){
            this.set("chatinit",false);
           
        }
    }
//   beforeModel() {
//     var user = localStorage.getItem("loggedin");
//     this.set("username",JSON.parse(user).username);
//     console.log(JSON.parse(user).username);
//      //console.log( user)
//     if (user === "null") {
//         this.transitionTo('login')
//     }
//     else if (JSON.parse(user).role == "ROLE_PATIENT")
//         this.transitionTo('dashboard.patient')
//     else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
//         this.transitionTo('dashboard.doctor')
//     else if (JSON.parse(user).role == "ROLE_ADMIN")
//         this.transitionTo('dashboard.admin');

// },
// model(){
//    return this.store.findAll('category');
// }

});
