const math = require('../src/math');

test('add: 1 + 2 = 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

describe('add: 1+2=3',() => {
    it('1+2=3', function() {
        expect(math.add(1, 2)).toBe(3);
    })
})