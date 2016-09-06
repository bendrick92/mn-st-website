import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    name: attr(),
    createdTime: attr('date-time'),
    from: belongsTo('facebook-user'),
    link: attr(),
    picture: attr(),
    message: attr(),
    postType: attr(),
    comments: hasMany('facebook-comment'),
    likes: hasMany('facebook-user')
});
