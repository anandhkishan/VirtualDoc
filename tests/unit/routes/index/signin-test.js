import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/signin', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/signin');
    assert.ok(route);
  });
});
