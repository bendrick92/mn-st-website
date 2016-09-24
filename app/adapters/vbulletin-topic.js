import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'mn-st-website/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.adapterHost,
    namespace: 'vbulletin',
    pathForType: function(type) {
        let replaced = type.replace('vbulletin-', '');
        let pluralized = Ember.String.pluralize(replaced);
        return pluralized;
    }
});