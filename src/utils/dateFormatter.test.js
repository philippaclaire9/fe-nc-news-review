const dateFormatter = require('./dateFormatter');

describe('dateFormatter()', () => {
  it('returns an empty string when passed an empty string', () => {
    expect(dateFormatter('')).toBe('');
  });
  it('returns an empty string when passed an empty string', () => {
    expect(dateFormatter('2018-05-30T15:59:13.341Z')).toBe('2018-05-30');
  });
});

//
