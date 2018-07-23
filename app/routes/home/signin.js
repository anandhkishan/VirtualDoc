import Route from '@ember/routing/route';



export default Route.extend({
    beforeModel() {
        var user = localStorage.getItem("loggedin")
        if (user === "null" || user==undefined)
            this.transitionTo('home.signin');
        else if (JSON.parse(user).role == "ROLE_PATIENT")
            this.transitionTo('pdashboard');
        else if (JSON.parse(user).rolee == "ROLE_DOCTOR")
            this.transitionTo('pdashboard');
        else if (JSON.parse(user).role == "ROLE_ADMIN")
            this.transitionTo('pdashboard');
    }
});
