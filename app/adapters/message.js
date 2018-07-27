import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    init() {
        var user = localStorage.getItem("loggedin")
        this._super(...arguments);
        this.set('headers', {
        'Authorization': JSON.parse(user).tokenType+' '+ JSON.parse(user).accessToken,
        'Content-Type': 'application/json'
        });
        },
        buildURL (modelName, id, snapshot, requestType, query){
            console.log(modelName, id, snapshot, requestType, query);
            return `/messages/${query}`;
        },
    namespace:"api"
});
