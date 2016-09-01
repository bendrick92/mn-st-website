import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    modelNameFromPayloadKey(key) {
        let withPrefix = 'vbulletin-' + key;
        return this._super(withPrefix);
    },

    payloadKeyFromModelName(modelName) {
        let type = this._super(modelName);
        return `${type.replace('vbulletin-', '')}`;
    }
});