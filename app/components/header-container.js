import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggleNav () {
            var hamburger = this.$('.hamburger');

            hamburger.toggleClass('open');

            var navList = this.$('nav ul');
            
            navList.toggleClass('show-all');
        }
    }
});
