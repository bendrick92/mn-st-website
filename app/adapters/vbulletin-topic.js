import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'vbulletin',
    pathForType: function(type) {
        let replaced = type.replace('vbulletin-', '');
        let pluralized = Ember.String.pluralize(replaced);
        return pluralized;
    }
});