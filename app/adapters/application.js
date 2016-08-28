/*import JSONAPIAdapter from 'ember-data/adapters/json-api';*/
import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:3000',
    namespace: 'vbulletin',
    pathForType: function(type) {
        let underscored = Ember.String.underscore(type);
        return Ember.String.pluralize(underscored);
    }
});