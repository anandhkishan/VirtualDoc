import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    chatstart:false,
    chatinit:false,
    client: service('chat'),

    actions:{
        initChat(patList){
            this.set("chatstart",true);
            // console.log(patList.patientId,"heloasdasd")
        //    this.get('client').connect(patList.patientId,patList.category)
           localStorage.setItem("typeCat",patList.category)
           localStorage.setItem("chatPatientid",patList.patientId)
        },
        goBack(){
            this.set("chatstart",false);
            this.set("chatinit",false);
        },
        heartChat(){
            this.set("chatinit",true);

        }
    }
    // docCall:service("doctorservice"), 
    // responseMessage:false,
    // patList:true,
    // sameDoc:true,
    // totalDr:true,

    // category:"",
    // init(){
    //     // var that = this;
        
    //     // console.log("asazxxzxzczx",this.get("category"))
    //     // this.get('docCall').getCategory().then((result)=>{
    //     //     (this.set("category",result.category))
    //     //     // console.log("asdasd",that.get("category"))
    //     // })
    //     // .catch((err)=>{
    //     //     console.log("err",err);
    //     // })
    //     // console.log("category",that.get('category'))
    //    // var category = JSON.parse(localStorage.getItem("loggedin"))
       
    //     // this.get('docCall').getMessages(category).then((result)=>{
    //     //     console.log("messagesas",result);
            
    //     // }).catch((err)=>{
    //     //     console.log("err",err);
    //     // })
    // },
    // actions:{
    //     patientList(){
    //         this.set('sameDoc',false);
    //         this.set('totalDr',false);
    //         this.set("patList",true);
    //         this.set("responseMessage",true);
    //     },
    //     doctorsSame(){
    //         this.set("patList",false);
    //         this.set("sameDoc",true);
    //         this.set("totalDr",false);
    //         this.set("responseMessage",true);
    //     },
    //     totalDoctors(){
    //         this.set("patList",false);
    //         this.set("sameDoc",false);
    //         this.set("totalDr",true);
    //         this.set("responseMessage",true);
    //     }

    // }
});
