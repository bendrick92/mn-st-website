import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    vbulletinPostId: attr(),
    author: attr(),
    content: attr(),
    submitDate: attr('date-time')
});
