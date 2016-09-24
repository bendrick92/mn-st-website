import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    modelNameFromPayloadKey(payloadKey) {
        let withPrefix = 'vbulletin-' + payloadKey;
        return this._super(withPrefix);
    },

    keyForAttribute(attr) {
        let underscored = Ember.String.underscore(attr);
        return underscored;
    },
    
    attrs: {
        forum: { embedded: 'always' },
        topic: { embedded: 'always' },
        quotes: { embedded: 'always' }
    }
});