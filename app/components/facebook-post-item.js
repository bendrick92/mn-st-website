import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggleComments (title, event) {
            var commentsToggle = this.$(event.target);
            var comments = commentsToggle.siblings('ul.post-comments');

            comments.toggleClass('show-all');
            comments.slideToggle();

            if (comments.hasClass('show-all')) {
                commentsToggle.text('Hide Comments');
            }
            else {
                commentsToggle.text('View Comments');
            }
        },
        showOverlay (title, event) {
            var imageOverlay = this.$(event.target).siblings('.ember-view').children('.image-overlay');
            imageOverlay.css('display', 'flex');
        }
    }
});