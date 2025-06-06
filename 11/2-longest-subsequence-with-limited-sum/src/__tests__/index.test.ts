import { answerQueries } from '..';

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
describe('answerQueries', () => {
  it.each([
    {
      nums: [4, 5, 2, 1],
      queries: [3, 10, 21],
      result: [2, 3, 4],
    },
    {
      nums: [2, 3, 4, 5],
      queries: [1],
      result: [0],
    },
  ])('should return an array', ({ nums, queries, result: expectedResult }) => {
    const result = answerQueries(nums, queries);
    console.log(result)
    expect(arraysEqual(result, expectedResult)).toBe(true);
  });
});
