import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/signupPat', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/signup-pat');
    assert.ok(route);
  });
});
