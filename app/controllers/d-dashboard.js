import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    docCall:service("doctorservice"), 
    responseMessage:false,
    patList:true,
    sameDoc:true,
    totalDr:true,

    category:"",
    init(){
        // var that = this;
        
        // console.log("asazxxzxzczx",this.get("category"))
        // this.get('docCall').getCategory().then((result)=>{
        //     (this.set("category",result.category))
        //     // console.log("asdasd",that.get("category"))
        // })
        // .catch((err)=>{
        //     console.log("err",err);
        // })
        // console.log("category",that.get('category'))
       // var category = JSON.parse(localStorage.getItem("loggedin"))
       
        // this.get('docCall').getMessages(category).then((result)=>{
        //     console.log("messagesas",result);
            
        // }).catch((err)=>{
        //     console.log("err",err);
        // })
    },
    actions:{
        patientList(){
            this.set('sameDoc',false);
            this.set('totalDr',false);
            this.set("patList",true);
            this.set("responseMessage",true);
        },
        doctorsSame(){
            this.set("patList",false);
            this.set("sameDoc",true);
            this.set("totalDr",false);
            this.set("responseMessage",true);
        },
        totalDoctors(){
            this.set("patList",false);
            this.set("sameDoc",false);
            this.set("totalDr",true);
            this.set("responseMessage",true);
        }

    }
});
