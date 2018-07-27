import Controller from '@ember/controller';

export default Controller.extend({
    username:JSON.parse(localStorage.getItem("loggedin")).username,
    role:JSON.parse(localStorage.getItem("loggedin")).role,
    name:JSON.parse(localStorage.getItem("loggedin")).name
});
