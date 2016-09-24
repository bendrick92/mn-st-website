import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    vbulletinPostId: attr(),
    author: attr(),
    postContent: attr(),
    submitDate: attr('date-time'),
    forum: belongsTo('vbulletin-forum'),
    topic: belongsTo('vbulletin-topic'),
    quotes: hasMany('vbulletin-quote')
});
