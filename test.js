var isNotArray = require('./');
var test = require('tape');

test('is not array', function(t){
  t.notOk(isNotArray([]));
  t.ok(isNotArray({}));
  t.ok(isNotArray(null));
  t.ok(isNotArray(false));
  t.ok(isNotArray(""));

  var obj = {};
  obj[0] = true;
  t.ok(isNotArray(obj));

  var arr = [];
  arr.foo = 'bar';
  t.notOk(isNotArray(arr));

  t.end();
});

