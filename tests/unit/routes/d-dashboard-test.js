import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | d-dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:d-dashboard');
    assert.ok(route);
  });
});
