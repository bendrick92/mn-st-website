import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'facebook',
    pathForType: function(type) {
        let replaced = type.replace('facebook-', '');
        return replaced;
    }
});