import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pdashboard/general', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pdashboard/general');
    assert.ok(route);
  });
});
