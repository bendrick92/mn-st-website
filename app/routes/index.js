import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            forum: this.get('store').queryRecord('forum', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            }),
            topic: this.get('store').queryRecord('topic', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            }),
            posts: this.get('store').query('post', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            })
        });
    }
});
