export function answerQueries(nums: number[], queries: number[]): number[] {
  const sortedNums = nums.toSorted();

  // let start = 0;
  // let sum = 0;
  // return queries.map((target) => {
  // let sum = 0;
  //   for (let i = 0; i < sortedNums.length; i++) {
  //     sum += sortedNums[i];
  //     if (sum > target) {
  //       return i;
  //     }
  //   }
  //   return sortedNums.length;
  // });

  // assume queries is sorted

  // const res = [];
  // let targetIndex = 0;
  // let sum = 0;
  // for (let i = 0; i < sortedNums.length; i++) {
  //   sum += sortedNums[i];
  //   if (sum > queries[targetIndex]) {
  //     res.push(i);
  //     targetIndex++;
  //   }
  // }

  //return [...res, ...Array(queries.length - res.length).fill(sortedNums.length)];

  // [1, 2, 3]
  // [1, 3, 6]

  const cumulatedSumVector = [sortedNums[0]];
  for (let i = 1; i < sortedNums.length; i++) {
    cumulatedSumVector.push(sortedNums[i] + cumulatedSumVector[i - 1]);
  }

  return queries.map((target) => {
    let leftIndex = 0;
    let rightIndex = cumulatedSumVector.length - 1;

    if (cumulatedSumVector[cumulatedSumVector.length - 1] <= target) {
      return cumulatedSumVector.length;
    }

    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor(leftIndex + rightIndex) / 2;
      const middle = cumulatedSumVector[middleIndex];
      if (middle === target) {
        return middleIndex + 1;
      }

      if (
        middle < target &&
        middleIndex < cumulatedSumVector.length - 1 &&
        cumulatedSumVector[middleIndex + 1] > target
      ) {
        return middleIndex + 1;
      }

      if (target < middle) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
    return cumulatedSumVector.length;
  });
}
