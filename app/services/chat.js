import Ember from 'ember';
var category = "general";
export default Ember.Service.extend({
stompClient: null,
connected: false,
messages: Ember.A([]),
username: localStorage.getItem("loggedin"),
feedback: "",
//locCategory:localStorage.getItem("category"),
category: "",
init() {
this._super(...arguments);

this.set('category', localStorage.getItem("category")+"-"+JSON.parse(localStorage.getItem("loggedin")).id);
console.log(this.get('category'));
},
add(user, message,id) {
var chatMessage = {
user: user,
content: message,
type: 'JOIN',
category:category,
id:id
};
this.get('messages').pushObject(chatMessage);
},
empty() {
this.get('messages').clear();
},
connect() {
this.clearFeedback();
var comp = this;
var cate = this.get('category');
var socket = new SockJS('http://localhost:8080/ws');
this.stompClient = Stomp.over(socket);
this.stompClient.connect({}, function (/*frame*/) {
comp.set('connected', true);
comp.stompClient.subscribe('/topic/public/'+category+"/"+ JSON.parse(localStorage.getItem("loggedin")).id, function (chatMessage) {
var message = JSON.parse(chatMessage.body).content;
var user = JSON.parse(chatMessage.body).user;
comp.showMessage(user, message,JSON.parse(chatMessage.body).id);
});
});
},
disconnect() {
this.clearFeedback();
if (this.stompClient != null) {
this.stompClient.disconnect();
}
this.set('connected', false);
},
showMessage(user, message,id) {
this.add(user, message,id);
},
sendMessage(message) {
if (this.stompClient != null && this.get('connected')) {
var chatMessage = {
user: JSON.parse(this.username).username,
content: message,
type: 'CHAT',
category:category,
id:JSON.parse(this.username).id
};
var cate = this.get('category');
this.stompClient.send("/app/" + category+"/"+ JSON.parse(localStorage.getItem("loggedin")).id+ "/chat.sendMessage", {}, JSON.stringify(chatMessage));
} else {
this.set('feedback', 'You are not connected!');
}
},
clearFeedback() {
this.set('feedback', '');
}
});