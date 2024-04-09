const serviceFunction = require('../funtions/service-function');

test('mock implemenetion of a basic function', () => {
    const mockCallBack = jest.fn(x => 1 + x);

    const value = mockCallBack(1);
    expect(value).toBe(2);
});

test('returns Learning JS', () => {

    serviceFunction.helper = jest.fn(() => true);

    const result = serviceFunction.execute();
    expect(result).toBe("Learning JS");
});

test('returns Not Learning JS', () => {
    
    serviceFunction.helper = jest.fn(() => false);

    const result = serviceFunction.execute();
    expect(result).toBe("Not Learning JS");
});