import { GameRunner } from '../game-runner';

describe('The test environment', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  for (let seed = 1; seed <= 100; seed++) {
    it('should access game with seed ', function () {
      expect(GameRunner).not.toBe(undefined);
      GameRunner.main(seed);
      expect(consoleSpy.mock.calls).toMatchSnapshot();
    });
  }
});
