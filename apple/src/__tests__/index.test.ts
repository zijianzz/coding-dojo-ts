import { maxNumberOfApples } from '..';

describe('Apple', () => {
  it.each([
    {
      weights: [100, 200, 150, 1000],
      result: 4,
    },
    {
      weights: [900, 950, 800, 1000, 700, 800],
      result: 5,
    },
  ])('should return the maximum number of apples you can put in the basket', ({ weights, result: expectedResult }) => {
    const result = maxNumberOfApples(weights);

    expect(result).toBe(expectedResult);
  });
});
