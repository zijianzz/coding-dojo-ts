import { canAttendMeetings } from '..';

describe('Meeting room I', () => {
  it.each([
    {
      intervals: [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      result: false,
    },
    {
      intervals: [
        [7, 10],
        [2, 4],
      ],
      result: true,
    },
    {
      intervals: [
        [8, 11],
        [17, 20],
        [17, 20],
      ],
      result: false,
    },
    {
      intervals: [
        [13, 15],
        [1, 13],
      ],
      result: true,
    },
  ])('should attend meeting with given intervals', ({ intervals, result: expectedResult }) => {
    const result = canAttendMeetings(intervals);

    expect(result).toBe(expectedResult);
  });
});
