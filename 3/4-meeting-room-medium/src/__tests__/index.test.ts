import { minMeetingRooms } from '..';

describe('Meeting room II', () => {
  it.each([
    {
      intervals: [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      result: 2,
    },
    {
      intervals: [
        [7, 10],
        [2, 4],
      ],
      result: 1,
    },
    {
      intervals: [[7, 10]],
      result: 1,
    },
    {
      intervals: [
        [9, 10],
        [4, 9],
        [4, 17],
      ],
      result: 2,
    },
    {
      intervals: [
        [1, 5],
        [8, 9],
        [8, 9],
      ],
      result: 2,
    },
    {
      intervals: [
        [11, 20],
        [4, 19],
        [13, 17],
        [6, 13],
      ],
      result: 3,
    },
  ])('should return minimum allocated meeting room with given intervals', ({ intervals, result: expectedResult }) => {
    const result = minMeetingRooms(intervals);

    expect(result).toBe(expectedResult);
  });
});
