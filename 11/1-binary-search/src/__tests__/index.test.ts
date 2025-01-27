import { search } from '..';

describe('Binary search', () => {
  it.each([
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 9,
      result: 4,
    },
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 2,
      result: -1,
    },
    {
      nums: [5],
      target: 5,
      result: 0,
    },
    {
      nums: [2, 5],
      target: 5,
      result: 1,
    },
  ])('should sort number array', ({ nums, target, result: expectedResult }) => {
    const result = search(nums, target);

    expect(result).toEqual(expectedResult);
  });
});
