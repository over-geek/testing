const reverseString = require('./reverseString');

test('reverse the string', () => {
    expect(reverseString('welcome')).toBe('emoclewg');
})