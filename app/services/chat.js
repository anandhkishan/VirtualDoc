import Ember from 'ember';
// var category = "general";
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
    },
    add(user, message, id) {
        var chatMessage = {
            user: user,
            content: message,
            type: 'JOIN',
            category: localStorage.getItem("typeCat"),
            id: id
        };
        this.get('messages').pushObject(chatMessage);
    },
    empty() {
        this.get('messages').clear();
    },
    connect() {
        this.clearFeedback();
        var comp = this;
       
       // var cate = this.get('category');
        var socket = new SockJS('http://localhost:8080/ws');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, function (/*frame*/) {
            comp.set('connected', true);
            comp.stompClient.subscribe('/topic/public/' + localStorage.getItem("typeCat") + "/" + localStorage.getItem("chatPatientid"), function (chatMessage) {
                var message = JSON.parse(chatMessage.body).content;
                var user = JSON.parse(chatMessage.body).user;
                comp.showMessage(user, message, JSON.parse(chatMessage.body).id);
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
    showMessage(user, message, id) {
        this.add(user, message, id);
    },
    sendMessage(message) {
        if (this.stompClient != null && this.get('connected')) {
            var chatMessage = {
                user: JSON.parse(this.username).username,
                content: message,
                type: 'CHAT',
                category: localStorage.getItem("typeCat"),
                id: JSON.parse(this.username).id
            };
            this.stompClient.send("/app/" + localStorage.getItem("typeCat") + "/" + localStorage.getItem("chatPatientid") + "/chat.sendMessage", {}, JSON.stringify(chatMessage));
        } else {
            this.set('feedback', 'You are not connected!');
        }
    },
    clearFeedback() {
        this.set('feedback', '');
    }
});