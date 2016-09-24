import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'mn-st-website/config/environment';

export default DS.RESTAdapter.extend({
    host: ENV.adapterHost,
    namespace: 'facebook',
    pathForType: function(type) {
        let replaced = type.replace('facebook-', '');
        let pluralized = Ember.String.pluralize(replaced);
        return pluralized;
    }
});