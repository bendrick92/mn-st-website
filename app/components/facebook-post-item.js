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
        toggleCommentComments (title, event) {
            var commentCommentsToggle = this.$(event.target);
            var commentComments = commentCommentsToggle.siblings('ul.comment-comments');

            commentComments.toggleClass('show-all');
            commentComments.slideToggle();

            if (commentComments.hasClass('show-all')) {
                commentCommentsToggle.text('Hide Replies');
            }
            else {
                commentCommentsToggle.text('View Replies');
            }
        },
        showOverlay (title, event) {
            var imageOverlay = this.$(event.target).siblings('.ember-view').children('.image-overlay');
            imageOverlay.css('display', 'flex');
        }
    },
    didInsertElement() {
        var postTexts = this.$('post-text');
        var commentTexts = this.$('.comment-text');
        postTexts.linkify();
        commentTexts.linkify();
    }
});