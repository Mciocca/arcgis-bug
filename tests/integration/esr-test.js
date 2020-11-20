import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render, click } from '@ember/test-helpers';

module('Integration | Component | Esri', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<EsriTest />`);
    assert.dom('h1').exists();
  });
});
