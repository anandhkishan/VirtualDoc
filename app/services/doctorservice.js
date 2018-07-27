import Service from '@ember/service';
import {Promise} from 'rsvp';

var BASE_URL = "http://192.168.78.159:8080/api/";
var user = localStorage.getItem("loggedin");
export default Service.extend({
    ajax:Ember.inject.service(),
    
    getCategory:function(){
        
        return Promise.resolve( this.get('ajax').request(BASE_URL+"auth/doctors/"+JSON.parse(localStorage.getItem("loggedin")).username,{
            method:'GET',
            headers:{
                'Content-Type':'appilicatio/json',
                'Authorization': JSON.parse(user).tokenType+' '+ JSON.parse(user).accessToken,
            }
        }));
    },
    getMessages:function(category){
        return Promise.resolve(this.get('ajax').request(BASE_URL+"messages/"+category,{
            method:'GET',
            headers:{
                'Content-Type':'appilicatio/json',
                'Authorization': JSON.parse(user).tokenType+' '+ JSON.parse(user).accessToken,
            }
        }));
    }

});
