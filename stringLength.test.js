const stringLength = require('./stringLength');

test('returns the character count of string', () => {
  expect(stringLength('Kofi')).toBe(4);
})