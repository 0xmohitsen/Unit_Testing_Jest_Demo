const basicFunction = require('../funtions/basic-function');

test('add 1 + 2 equal to 3', () => {
    const result = basicFunction.sum(1,2);
    expect(result).toBe(3);
});

test('fav food returns as Pizza', () => {
    const result = basicFunction.myFavFood();
    expect(result).toBe('Pizza');
});

test('No is Even', () => {
    const result = basicFunction.isTodayHot();
    expect(result).toBe(false);
});

test('customer data is correct/equal', () => {
    const result = basicFunction.customerData();
    expect(result).toEqual({name: 'mohit', age: 25});
});

test('data in array', () => {
    const fruits = ["apple", "mango"];

    fruits.push("grapes");

    expect(fruits).toEqual(['apple', 'mango', 'grapes']);
});
