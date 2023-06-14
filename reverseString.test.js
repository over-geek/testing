const reverseString = require('./reverseString');

test('reverse the string', () => {
    expect(reverseString('hello')).toBe('olleh');
})