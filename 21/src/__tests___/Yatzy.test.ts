import Yatzy from '../Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    expect(Yatzy.chance(2, 3, 4, 5, 1)).toEqual(15);
    expect(Yatzy.chance(3, 3, 4, 5, 1)).toEqual(16);
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    expect(Yatzy.yatzy(4, 4, 4, 4, 4)).toEqual(50);
    expect(Yatzy.yatzy(6, 6, 6, 6, 6)).toEqual(50);
    expect(Yatzy.yatzy(6, 6, 6, 6, 3)).toEqual(0);
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    expect(Yatzy.ones(1, 2, 3, 4, 5)).toEqual(1);
    expect(Yatzy.ones(1, 2, 1, 4, 5)).toEqual(2);
    expect(Yatzy.ones(6, 2, 2, 4, 5)).toEqual(0);
    expect(Yatzy.ones(1, 2, 1, 1, 1)).toEqual(4);
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    expect(Yatzy.twos(1, 2, 3, 2, 6)).toEqual(4);
    expect(Yatzy.twos(2, 2, 2, 2, 2)).toEqual(10);
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    expect(Yatzy.threes(1, 2, 3, 2, 3)).toEqual(6);
    expect(Yatzy.threes(2, 3, 3, 3, 3)).toEqual(12);
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    expect(new Yatzy(4, 4, 4, 5, 5).fours()).toEqual(12);
    expect(new Yatzy(4, 4, 5, 5, 5).fours()).toEqual(8);
    expect(new Yatzy(4, 5, 5, 5, 5).fours()).toEqual(4);
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    expect(new Yatzy(4, 4, 4, 5, 5).fives()).toEqual(10);
    expect(new Yatzy(4, 4, 5, 5, 5).fives()).toEqual(15);
    expect(new Yatzy(4, 5, 5, 5, 5).fives()).toEqual(20);
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    expect(new Yatzy(4, 4, 4, 5, 5).sixes()).toEqual(0);
    expect(new Yatzy(4, 4, 6, 5, 5).sixes()).toEqual(6);
    expect(new Yatzy(6, 5, 6, 6, 5).sixes()).toEqual(18);
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    expect(Yatzy.score_pair(3, 4, 3, 5, 6)).toEqual(6);
    expect(Yatzy.score_pair(5, 3, 3, 3, 5)).toEqual(10);
    expect(Yatzy.score_pair(5, 3, 6, 6, 5)).toEqual(12);
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    expect(Yatzy.two_pair(3, 3, 5, 4, 5)).toEqual(16);
    expect(Yatzy.two_pair(3, 3, 5, 5, 5)).toEqual(16);
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    expect(Yatzy.three_of_a_kind(3, 3, 3, 4, 5)).toEqual(9);
    expect(Yatzy.three_of_a_kind(5, 3, 5, 4, 5)).toEqual(15);
    expect(Yatzy.three_of_a_kind(3, 3, 3, 3, 5)).toEqual(9);
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    expect(Yatzy.four_of_a_kind(3, 3, 3, 3, 5)).toEqual(12);
    expect(Yatzy.four_of_a_kind(5, 5, 5, 4, 5)).toEqual(20);
    expect(Yatzy.three_of_a_kind(3, 3, 3, 3, 3)).toEqual(9);
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    expect(Yatzy.smallStraight(1, 2, 3, 4, 5)).toEqual(15);
    expect(Yatzy.smallStraight(2, 3, 4, 5, 1)).toEqual(15);
    expect(Yatzy.smallStraight(1, 2, 2, 4, 5)).toEqual(0);
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    expect(Yatzy.largeStraight(6, 2, 3, 4, 5)).toEqual(20);
    expect(Yatzy.largeStraight(2, 3, 4, 5, 6)).toEqual(20);
    expect(Yatzy.largeStraight(1, 2, 2, 4, 5)).toEqual(0);
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    expect(Yatzy.fullHouse(6, 2, 2, 2, 6)).toEqual(18);
    expect(Yatzy.fullHouse(2, 3, 4, 5, 6)).toEqual(0);
  });
});
