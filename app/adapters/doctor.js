import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    init() {
        var user = localStorage.getItem("loggedin")
        this._super(...arguments);
        if(JSON.parse(localStorage.getItem("loggedin"))!=null||JSON.parse(localStorage.getItem("loggedin"))!=undefined)
        this.set('headers', {
        'Authorization': JSON.parse(user).tokenType+' '+ JSON.parse(user).accessToken,
        'Content-Type': 'application/json'
        });
    },
        // findRecord: function(store, type, id, snapshot) {
        //     if (Em.get(snapshot, 'include')) {
        //       let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
        //       let query = this.buildQuery(snapshot);
        //       return this.ajax(url, 'GET', { data: query });
        //     } else {
        //       this._super(...arguments);
        //     }
        // },
    namespace:"api/auth"
});
