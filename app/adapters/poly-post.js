import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'poly',
    pathForType: function(type) {
        let replaced = type.replace('poly-', '');
        let pluralized = Ember.String.pluralize(replaced);
        return pluralized;
    }
});