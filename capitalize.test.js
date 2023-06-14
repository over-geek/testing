const capitalize = require('./capitalize')

test('returns the string with first char capitalized', () => {
  expect(capitalize('kenneth')).toBe('K');
})