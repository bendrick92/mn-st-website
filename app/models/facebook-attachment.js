import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    description: attr(),
    imageHeight: attr(),
    imageSrc: attr(),
    imageWidth: attr(),
    targetId: attr(),
    targetUrl: attr(),
    title: attr(),
    attachmentType: attr(),
    url: attr(),
    subattachments: hasMany('facebook-attachment')
});
