import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        var user = localStorage.getItem("loggedin")
        console.log(user);
        if (user === null) {
            this.transitionTo("home.signup")
        }
        else if (JSON.parse(user).role == "ROLE_PATIENT")
            this.transitionTo('pdashboard')
        else if (JSON.parse(user).role == "ROLE_DOCTOR")
            this.transitionTo('d-dashboard')
        else if (JSON.parse(user).role == "ROLE_ADMIN")
            this.transitionTo('admin-dashboard');
    }
});
