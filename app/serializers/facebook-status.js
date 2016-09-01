import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    modelNameFromPayloadKey(key) {
        let withPrefix = 'facebook-' + key;
        return this._super(withPrefix);
    },

    payloadKeyFromModelName(modelName) {
        let type = this._super(modelName);
        return `${type.replace('facebook-', '')}`;
    }
});