import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            polyPosts: this.get('store').findAll('poly-post')
        });
    }
});
