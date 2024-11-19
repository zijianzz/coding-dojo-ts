// const quickSort = (nums: number[], low: number, high: number) => {
//   const pivot = nums[high];

//   for (let i = 0 )
//   j
//     [...nmbers below pivot, pivot, number above]

//   quickSort(low, j-1)
//   quickSort(j+1, high)
//   return nums;
// };

export function sort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const leftArr = [];
  const rightArr = [];

  const pivot = nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }
  }

  return [...sort(leftArr), pivot, ...sort(rightArr)];
}
