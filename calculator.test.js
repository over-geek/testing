const Calculator = require('./calculator');

describe('my calculator', () => {
  test('return sum of numbers', () => {
    const calcAdd = new Calculator(4, 2);
    const add = calcAdd.add();
    expect(add).toBe(6);
  });
  test('return subtraction of numbers', () => {
    const calcAdd = new Calculator(4, 2);
    const subtract = calcAdd.subtract();
    expect(subtract).toBe(2);
  })
  test('return division of numbers', () => {
    const calcSub = new Calculator(4, 2);
    const division = calcSub.divide();
    expect(division).toBe(2);
  })
  test('return sum of numbers', () => {
    const calcMultiply = new Calculator(4, 2);
    const multiply = calcMultiply.multiply();
    expect(multiply).toBe(8);
  })
})