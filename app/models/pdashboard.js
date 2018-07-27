import DS from 'ember-data';

export default DS.Model.extend({
  accessToken: DS.attr("string"),
   tokenType: DS.attr("string"),
    username: DS.attr("string"),
   role: DS.attr("string"),
    id: DS.attr("string")
});
