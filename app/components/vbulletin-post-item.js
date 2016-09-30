import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        var postTexts = this.$('.post-text');
        postTexts.linkify();
    }
});
