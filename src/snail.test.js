const snail = require('./snail');

describe('User Story 1: 2x2 arr max', () => {
  it('UAT1.1 When I pass ([[]]) then I want to see []', () => {
    expect(snail([[]])).toStrictEqual([]);
  });
  it('UAT1.2 When I pass ([[1]]) then I want to see [1]', () => {
    expect(snail([[1]])).toStrictEqual([1]);
  });
});
