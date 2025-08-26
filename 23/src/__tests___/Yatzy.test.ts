import Yatzy from '../Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    expect(new Yatzy([2, 3, 4, 5, 1]).chance()).toEqual(15);
    expect(new Yatzy([3, 3, 4, 5, 1]).chance()).toEqual(16);
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    expect(new Yatzy([4, 4, 4, 4, 4]).yatzy()).toEqual(50);
    expect(new Yatzy([6, 6, 6, 6, 6]).yatzy()).toEqual(50);
    expect(new Yatzy([6, 6, 6, 6, 3]).yatzy()).toEqual(0);
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    expect(new Yatzy([1, 2, 3, 4, 5]).ones()).toEqual(1);
    expect(new Yatzy([1, 2, 1, 4, 5]).ones()).toEqual(2);
    expect(new Yatzy([6, 2, 2, 4, 5]).ones()).toEqual(0);
    expect(new Yatzy([1, 2, 1, 1, 1]).ones()).toEqual(4);
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    expect(new Yatzy([1, 2, 3, 2, 6]).twos()).toEqual(4);
    expect(new Yatzy([2, 2, 2, 2, 2]).twos()).toEqual(10);
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    expect(new Yatzy([1, 2, 3, 2, 3]).threes()).toEqual(6);
    expect(new Yatzy([2, 3, 3, 3, 3]).threes()).toEqual(12);
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    expect(new Yatzy([4, 4, 4, 5, 5]).fours()).toEqual(12);
    expect(new Yatzy([4, 4, 5, 5, 5]).fours()).toEqual(8);
    expect(new Yatzy([4, 5, 5, 5, 5]).fours()).toEqual(4);
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    expect(new Yatzy([4, 4, 4, 5, 5]).fives()).toEqual(10);
    expect(new Yatzy([4, 4, 5, 5, 5]).fives()).toEqual(15);
    expect(new Yatzy([4, 5, 5, 5, 5]).fives()).toEqual(20);
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    expect(new Yatzy([4, 4, 4, 5, 5]).sixes()).toEqual(0);
    expect(new Yatzy([4, 4, 6, 5, 5]).sixes()).toEqual(6);
    expect(new Yatzy([6, 5, 6, 6, 5]).sixes()).toEqual(18);
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    expect(new Yatzy([3, 4, 3, 5, 6]).pair()).toEqual(6);
    expect(new Yatzy([5, 3, 3, 3, 5]).pair()).toEqual(10);
    expect(new Yatzy([5, 3, 6, 6, 5]).pair()).toEqual(12);
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    expect(new Yatzy([3, 3, 5, 4, 5]).twoPairs()).toEqual(16);
    expect(new Yatzy([3, 3, 5, 5, 5]).twoPairs()).toEqual(16);
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    expect(new Yatzy([3, 3, 3, 4, 5]).threeOfAKind()).toEqual(9);
    expect(new Yatzy([5, 3, 5, 4, 5]).threeOfAKind()).toEqual(15);
    expect(new Yatzy([3, 3, 3, 3, 5]).threeOfAKind()).toEqual(9);
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    expect(new Yatzy([3, 3, 3, 3, 5]).fourOfAKind()).toEqual(12);
    expect(new Yatzy([5, 5, 5, 4, 5]).fourOfAKind()).toEqual(20);
    expect(new Yatzy([3, 3, 3, 3, 3]).threeOfAKind()).toEqual(9);
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    expect(new Yatzy([1, 2, 3, 4, 5]).smallStraight()).toEqual(15);
    expect(new Yatzy([2, 3, 4, 5, 1]).smallStraight()).toEqual(15);
    expect(new Yatzy([1, 2, 2, 4, 5]).smallStraight()).toEqual(0);
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    expect(new Yatzy([6, 2, 3, 4, 5]).largeStraight()).toEqual(20);
    expect(new Yatzy([2, 3, 4, 5, 6]).largeStraight()).toEqual(20);
    expect(new Yatzy([1, 2, 2, 4, 5]).largeStraight()).toEqual(0);
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    expect(new Yatzy([6, 2, 2, 2, 6]).fullHouse()).toEqual(18);
    expect(new Yatzy([2, 3, 4, 5, 6]).fullHouse()).toEqual(0);
  });
});
