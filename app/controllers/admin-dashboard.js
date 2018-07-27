import Controller from '@ember/controller';

export default Controller.extend({
    patientShow:false,
    docShow:false,
    actions:{
        DocList(){
            this.set("patientShow",false);
            this.set("docShow",true);
        },
        PatList(){
            this.set("patientShow",true);
            this.set("docShow",false)
        }

    }
});
