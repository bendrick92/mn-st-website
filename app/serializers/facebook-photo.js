import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    modelNameFromPayloadKey(key) {
        let withPrefix = 'facebook-' + key;
        return this._super(withPrefix);
    },

    payloadKeyFromModelName(modelName) {
        let type = this._super(modelName);
        return `${type.replace('facebook-', '')}`;
    },

    attrs: {
        comments: { embedded: 'always' }
    }
});