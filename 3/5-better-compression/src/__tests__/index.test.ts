import { betterCompression } from '..';

describe('Apple', () => {
  it.each([
    {
      compressed: 'a3c9b2c1',
      result: 'a3b2c10',
    },
    {
      compressed: 'c2b3a1',
      result: 'a1b3c2',
    },
    {
      compressed: 'a2b4c1',
      result: 'a2b4c1',
    },
  ])('should return the better compression of compressed', ({ compressed, result: expectedResult }) => {
    const result = betterCompression(compressed);

    expect(result).toBe(expectedResult);
  });
});
