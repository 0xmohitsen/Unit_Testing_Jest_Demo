import execute from "../src/services/execute.js";
import helper from "../src/services/helper.js";

jest.mock('../src/services/helper.js');

test('return Hi', () => {
    const mockValue = true;

    helper.mockReturnValue(mockValue);

    const result = execute();
    expect(result).toBe('Hi');
});

test('returns Bye', () => {

    const mockValue = false;

    helper.mockReturnValue(mockValue);
    const result = execute();

    expect(result).toBe('Bye');
});