import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        hideOverlay () {
            var imageOverlay = this.$('.image-overlay');
            imageOverlay.css('display', 'none');
        }
    }
});
