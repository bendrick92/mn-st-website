import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vbulletin-post-item', 'Integration | Component | vbulletin post item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vbulletin-post-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vbulletin-post-item}}
      template block text
    {{/vbulletin-post-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
