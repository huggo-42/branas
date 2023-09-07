import { sum } from '../src/math';

test("Should sum 4 + 2", function() {
    const result = sum(4, 2);
    expect(result).toBe(6);
});

