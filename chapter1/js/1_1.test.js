const f = require('./1_1');
const test = require('ava');

test('false', t => {
  t.is(f(''), false);
  t.is(f('a'), false);
  t.is(f('ab'), false);
  t.is(f('a b'), false);
});

test('true', t => {
  t.is(f('aa'), true);
  t.is(f('aba'), true);
  t.is(f('Baa'), true);
  t.is(f('aab'), true);
});
