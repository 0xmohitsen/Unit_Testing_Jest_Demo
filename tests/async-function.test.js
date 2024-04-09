const asyncFunction = require('../funtions/async-function');

test('Data is fetched', done => {
    const callBack = (data) => {
        try {
            expect(data).toBe('Pizza');
            done();
        } catch (error) {
            done(error);
        }
    }

    asyncFunction.fetchData(callBack);
});

test('Promise is resolved', () => {
    return expect(asyncFunction.fetchPromise()).resolves.toBe('Pizza');
});

test('Promise is rejected', () => {
    return expect(asyncFunction.fetchPromise1()).rejects.toBe('Pizza');
});

test('data is Pizza', async () => {
    const data = await asyncFunction.fetchPromise();
    expect(data).toBe('Pizza');
});