const f = require('./1_2');
const test = require('ava');

test('false', t => {
  t.is(f('', 'a'), false);
  t.is(f('a', 'aa'), false);
  t.is(f('aa', 'a'), false);
  t.is(f('b', 'a'), false);
  t.is(f('ab', 'aa'), false);
});

test('true', t => {
  t.is(f('', ''), true);
  t.is(f('a', 'a'), true);
  t.is(f('ab', 'ba'), true);
  t.is(f('abb', 'bab'), true);
  t.is(f('babcb', 'cbabb'), true);
});
