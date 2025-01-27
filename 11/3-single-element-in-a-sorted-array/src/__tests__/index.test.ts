import { singleNonDuplicate } from '..';

describe('Apple', () => {
  it.each([
    {
      weights: [1, 1, 2, 3, 3, 4, 4, 8, 8],
      result: 2,
    },
    {
      weights: [3, 3, 7, 7, 10, 11, 11],
      result: 10,
    },
  ])('should return result', ({ weights, result: expectedResult }) => {
    const result = singleNonDuplicate(weights);

    expect(result).toBe(expectedResult);
  });
});
