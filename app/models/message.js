import DS from 'ember-data';

export default DS.Model.extend({
    createdAt: DS.attr(),
    updatedAt: DS.attr(),
    sender: DS.attr(),
    patientId: DS.attr(),
    content: DS.attr(),
    category: DS.attr(),
    status: DS.attr()

});
