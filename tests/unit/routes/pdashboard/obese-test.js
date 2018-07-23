import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pdashboard/obese', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pdashboard/obese');
    assert.ok(route);
  });
});
