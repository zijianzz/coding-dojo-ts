type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type Dices = [Dice, Dice, Dice, Dice, Dice];

const single = (dices: Dices, targetNumber: Dice) => {
  return dices.filter((dice) => dice === targetNumber).length * targetNumber;
};

const countRepetitions = (dices: Dices): number[] => {
  const counts = [0, 0, 0, 0, 0, 0];
  for (const dice of dices) {
    counts[dice - 1]++;
  }
  return counts;
};

const xOfAKind = (dices: Dices, times: number): number => {
  const repetitions = countRepetitions(dices);
  const diceIndex = repetitions.findLastIndex((dice) => dice >= times);

  return (diceIndex + 1) * times;
};

interface ScoreRules {
  appliesTo(dices: Dices): boolean;
  getScore(dices: Dices): number;
}


export default class Yatzy {
  private dices: Dices;

  constructor(dices: Dices) {
    this.dices = dices;
  }

  chance(): number {
    return this.dices.reduce((sum, dice) => sum + dice, 0);
  }

  yatzy(): number {
    return this.dices.every((dice) => dice == this.dices[0]) ? 50 : 0;
  }

  ones(): number {
    return single(this.dices, 1);
  }

  twos(): number {
    return single(this.dices, 2);
  }

  threes(): number {
    return single(this.dices, 3);
  }

  fours(): number {
    return single(this.dices, 4);
  }

  fives(): number {
    return single(this.dices, 5);
  }

  sixes(): number {
    return single(this.dices, 6);
  }

  pair(): number {
    return xOfAKind(this.dices, 2);
  }

  twoPairs(): number {
    const repetitions = countRepetitions(this.dices);
    const firstPairIndex = repetitions.findLastIndex((dice) => dice > 1);
    const secondPairIndex = repetitions.findLastIndex((dice, index) => dice > 1 && index !== firstPairIndex);

    if (firstPairIndex === -1 || secondPairIndex === -1) {
      return 0;
    }

    return (firstPairIndex + 1) * 2 + (secondPairIndex + 1) * 2;
  }

  fourOfAKind(): number {
    return xOfAKind(this.dices, 4);
  }

  threeOfAKind(): number {
    return xOfAKind(this.dices, 3);
  }

  smallStraight(): number {
    return countRepetitions(this.dices)
      .slice(0, 5)
      .every((rep) => rep === 1)
      ? 15
      : 0;
  }

  largeStraight(): number {
    return countRepetitions(this.dices)
      .slice(1, 6)
      .every((rep) => rep === 1)
      ? 20
      : 0;
  }

  fullHouse(): number {
    const repetitions = countRepetitions(this.dices);
    const threeOfAKind = repetitions.findLastIndex((dice) => dice === 3);
    const twoOfAKind = repetitions.findLastIndex((dice) => dice === 2);

    if (threeOfAKind === -1 || twoOfAKind === -1) {
      return 0;
    }
    return (threeOfAKind + 1) * 3 + (twoOfAKind + 1) * 2;
  }
}
