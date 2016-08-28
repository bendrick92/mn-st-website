export default DS.Transform.extend({
    serialize: function(value) {
        return value ? value.toJSON() : null;
    },
    deserialize: function(value) {
        return moment(value).format('MMMM D, YYYY h:mm A');
    }
});