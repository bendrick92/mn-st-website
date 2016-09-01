import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    modelNameFromPayloadKey(key) {
        let withPrefix = 'facebook-' + key;
        return this._super(withPrefix);
    },

    payloadKeyFromModelName(modelName) {
        let type = this._super(modelName);
        return `${type.replace('facebook-', '')}`;
    },
    
    normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
        payload[primaryModelClass.modelName] = payload['data'];
        delete payload['data'];

        return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
    }
});