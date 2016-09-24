import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    modelNameFromPayloadKey(payloadKey) {
        let withPrefix = 'poly-' + payloadKey;
        return this._super(withPrefix);
    },

    keyForAttribute(attr) {
        let underscored = Ember.String.underscore(attr);
        return underscored;
    },

    attrs: {
        facebookPost: { embedded: 'always' },
        vbulletinPost: { embedded: 'always' }
    }
});