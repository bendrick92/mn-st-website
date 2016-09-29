import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    from: belongsTo('facebook-user'),
    message: attr(),
    comments: hasMany('facebook-comment')
});
