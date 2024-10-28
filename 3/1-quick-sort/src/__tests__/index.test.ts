import { sort } from '..';

function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

describe('Quick sort', () => {
  it.each([
    {
      nums: [2, 4, 1, 5, 3, 7, 8, 6, 10, 9],
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      nums: [5, 4, 3, 2, 1],
      result: [1, 2, 3, 4, 5],
    },
    {
      nums: [64, 34, 25, 12, 22, 11, 90],
      result: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      nums: [42],
      result: [42],
    },
    {
      nums: [],
      result: [],
    },
  ])('should sort number array', ({ nums, result: expectedResult }) => {
    const result = sort(nums);

    expect(arraysEqual(result, expectedResult)).toBe(true);
  });
});
