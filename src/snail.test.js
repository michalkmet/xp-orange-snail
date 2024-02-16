const snail = require('./snail');

describe('hello', () => {
  it('should return hello', () => {
    expect(snail()).toBe('hello');
  });
});
