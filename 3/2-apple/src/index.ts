export function maxNumberOfApples(weight: number[]): number {
  const sortedApples = weight.toSorted();

  const totalWeight = 5000;
  let numberOfApples = 0;
  let currentWeight = 0;
  for (const apple of sortedApples) {
    currentWeight += apple;
    if (currentWeight > totalWeight) {
      break;
    }
    numberOfApples++;
  }
  return numberOfApples;
}
