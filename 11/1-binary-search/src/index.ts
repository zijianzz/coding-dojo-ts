export function search(nums: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middle = nums[middleIndex];

    if (middle === target) {
      return middleIndex;
    } else if (target < middle) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
