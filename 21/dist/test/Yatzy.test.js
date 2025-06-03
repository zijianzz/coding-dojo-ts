"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Yatzy_1 = __importDefault(require("../src/Yatzy"));
describe('Chance', () => {
    it('scores sum of all dice', () => {
        expect(Yatzy_1.default.chance(2, 3, 4, 5, 1)).toEqual(15);
        expect(Yatzy_1.default.chance(3, 3, 4, 5, 1)).toEqual(16);
    });
});
describe('Yatzy', () => {
    it('scores 50', () => {
        expect(Yatzy_1.default.yatzy(4, 4, 4, 4, 4)).toEqual(50);
        expect(Yatzy_1.default.yatzy(6, 6, 6, 6, 6)).toEqual(50);
        expect(Yatzy_1.default.yatzy(6, 6, 6, 6, 3)).toEqual(0);
    });
});
describe('Ones', () => {
    it('score the sum of 1s', () => {
        expect(Yatzy_1.default.ones(1, 2, 3, 4, 5)).toEqual(1);
        expect(Yatzy_1.default.ones(1, 2, 1, 4, 5)).toEqual(2);
        expect(Yatzy_1.default.ones(6, 2, 2, 4, 5)).toEqual(0);
        expect(Yatzy_1.default.ones(1, 2, 1, 1, 1)).toEqual(4);
    });
});
describe('Twos', () => {
    it('score the sum of 2s', () => {
        expect(Yatzy_1.default.twos(1, 2, 3, 2, 6)).toEqual(4);
        expect(Yatzy_1.default.twos(2, 2, 2, 2, 2)).toEqual(10);
    });
});
describe('Threes', () => {
    it('score the sum of 3s', () => {
        expect(Yatzy_1.default.threes(1, 2, 3, 2, 3)).toEqual(6);
        expect(Yatzy_1.default.threes(2, 3, 3, 3, 3)).toEqual(12);
    });
});
describe('Fours', () => {
    it('score the sum of 4s', () => {
        expect(new Yatzy_1.default(4, 4, 4, 5, 5).fours()).toEqual(12);
        expect(new Yatzy_1.default(4, 4, 5, 5, 5).fours()).toEqual(8);
        expect(new Yatzy_1.default(4, 5, 5, 5, 5).fours()).toEqual(4);
    });
});
describe('Fives', () => {
    it('score the sum of fives', () => {
        expect(new Yatzy_1.default(4, 4, 4, 5, 5).fives()).toEqual(10);
        expect(new Yatzy_1.default(4, 4, 5, 5, 5).fives()).toEqual(15);
        expect(new Yatzy_1.default(4, 5, 5, 5, 5).fives()).toEqual(20);
    });
});
describe('Sixes', () => {
    it('score the sum of sixes', () => {
        expect(new Yatzy_1.default(4, 4, 4, 5, 5).sixes()).toEqual(0);
        expect(new Yatzy_1.default(4, 4, 6, 5, 5).sixes()).toEqual(6);
        expect(new Yatzy_1.default(6, 5, 6, 6, 5).sixes()).toEqual(18);
    });
});
describe('One pair', () => {
    it('scores the sum of the highest pair', () => {
        expect(Yatzy_1.default.score_pair(3, 4, 3, 5, 6)).toEqual(6);
        expect(Yatzy_1.default.score_pair(5, 3, 3, 3, 5)).toEqual(10);
        expect(Yatzy_1.default.score_pair(5, 3, 6, 6, 5)).toEqual(12);
    });
});
describe('Two pair', () => {
    it('scores the sum of the two pairs', () => {
        expect(Yatzy_1.default.two_pair(3, 3, 5, 4, 5)).toEqual(16);
        expect(Yatzy_1.default.two_pair(3, 3, 5, 5, 5)).toEqual(16);
    });
});
describe('Three of a kind', () => {
    it('scores the sum of the three of the kind', () => {
        expect(Yatzy_1.default.three_of_a_kind(3, 3, 3, 4, 5)).toEqual(9);
        expect(Yatzy_1.default.three_of_a_kind(5, 3, 5, 4, 5)).toEqual(15);
        expect(Yatzy_1.default.three_of_a_kind(3, 3, 3, 3, 5)).toEqual(9);
    });
});
describe('Four of a kind', () => {
    it('scores the sum of the four of the kind', () => {
        expect(Yatzy_1.default.four_of_a_kind(3, 3, 3, 3, 5)).toEqual(12);
        expect(Yatzy_1.default.four_of_a_kind(5, 5, 5, 4, 5)).toEqual(20);
        expect(Yatzy_1.default.three_of_a_kind(3, 3, 3, 3, 3)).toEqual(9);
    });
});
describe('Small straight', () => {
    it('scores 15', () => {
        expect(Yatzy_1.default.smallStraight(1, 2, 3, 4, 5)).toEqual(15);
        expect(Yatzy_1.default.smallStraight(2, 3, 4, 5, 1)).toEqual(15);
        expect(Yatzy_1.default.smallStraight(1, 2, 2, 4, 5)).toEqual(0);
    });
});
describe('Large straight', () => {
    it('scores 20', () => {
        expect(Yatzy_1.default.largeStraight(6, 2, 3, 4, 5)).toEqual(20);
        expect(Yatzy_1.default.largeStraight(2, 3, 4, 5, 6)).toEqual(20);
        expect(Yatzy_1.default.largeStraight(1, 2, 2, 4, 5)).toEqual(0);
    });
});
describe('Full house', () => {
    it('scores the sum of the full house', () => {
        expect(Yatzy_1.default.fullHouse(6, 2, 2, 2, 6)).toEqual(18);
        expect(Yatzy_1.default.fullHouse(2, 3, 4, 5, 6)).toEqual(0);
    });
});
