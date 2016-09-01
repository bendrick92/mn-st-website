import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://graph.facebook.com/v2.7',
    namespace: '604231966385537',
    pathForType: function(type) {
        return 'feed';
    }
});