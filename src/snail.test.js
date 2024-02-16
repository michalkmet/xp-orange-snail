const snail = require('./snail');

describe('User Story 1: 2x2 arr max', () => {
  it('UAT1.1 When I pass ([[]]) then I want to see []', () => {
    expect(snail([[]])).toStrictEqual([]);
  });
});
