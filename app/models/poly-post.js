import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
    postType: attr(),
    facebookPost: belongsTo('facebook-post'),
    vbulletinPost: belongsTo('vbulletin-post')
});