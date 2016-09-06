import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            vbulletinTopic: this.get('store').queryRecord('vbulletin-topic', {
                url: 'http://www.focusst.org/forum/midwest-st-owners/6774-minnesota-st-owners.html'
            }),
            facebookFeed: this.get('store').queryRecord('facebook-feed', {
                group_id: '604231966385537',
                fields: 'id,name,created_time,type,link,picture,message,from,comments,likes',
                access_token: '1333570303337296%7CssnHtq9p3DuFAxX23XRx7Dc1reQ'
            })
        });
    }
});
