import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            vbulletinForum: this.get('store').queryRecord('vbulletin-forum', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            }),
            vbulletinTopic: this.get('store').queryRecord('vbulletin-topic', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            }),
            vbulletinPosts: this.get('store').query('vbulletin-post', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            }),
            facebookFeedObjects: this.get('store').query('facebook-feed', {
                fields: 'id,type,message,from,comments',
                access_token: '1333570303337296%7CssnHtq9p3DuFAxX23XRx7Dc1reQ'
            })
        });
    }
});
