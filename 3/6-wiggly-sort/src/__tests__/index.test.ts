import { wiggleSort } from '..';

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

describe('Wiggly sort', () => {
  it.each([
    {
      nums: [3, 5, 2, 1, 6, 4],
      result: [3, 5, 1, 6, 2, 4],
    },
    {
      nums: [6, 6, 5, 6, 3, 8],
      result: [6, 6, 5, 6, 3, 8],
    },
  ])('should return the better compression of compressed', ({ nums, result: expectedResult }) => {
    const result = wiggleSort(nums);

    expect(arraysEqual(result, expectedResult)).toBe(true);
  });
});
