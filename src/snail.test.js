const snail = require('./snail');

describe('User Story 1: 2x2 arr max', () => {
  it('UAT1.1 When I pass ([[]]) then I want to see []', () => {
    expect(snail([[]])).toStrictEqual([]);
  });
  it('UAT1.2 When I pass ([[1]]) then I want to see [1]', () => {
    expect(snail([[1]])).toStrictEqual([1]);
  });
  it('UAT1.3 When I pass ([[1, 2],[3, 4]]) then I want to see [1, 2, 4, 3]', () => {
    expect(
      snail([
        [1, 2],
        [3, 4],
      ]),
    ).toStrictEqual([1, 2, 4, 3]);
  });

  it('UAT1.4 When I pass ([[4, 3],[2, 1]]) then I want to see [4, 3, 1, 2]', () => {
    expect(
      snail([
        [4, 3],
        [2, 1],
      ]),
    ).toStrictEqual([4, 3, 1, 2]);
  });

  it('UAT1.5 When I pass ([[7, 8],[9, 10]]) then I want to see [7, 8, 10, 9]', () => {
    expect(
      snail([
        [7, 8],
        [9, 10],
      ]),
    ).toStrictEqual([7, 8, 10, 9]);
  });

  it('UAT1.6 When I pass ([[1, 5],[2, 8]]) then I want to see [1, 5, 8, 2]', () => {
    expect(
      snail([
        [1, 5],
        [2, 8],
      ]),
    ).toStrictEqual([1, 5, 8, 2]);
  });
});
