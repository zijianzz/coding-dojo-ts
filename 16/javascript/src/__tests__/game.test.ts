import { GameRunner } from '../game-runner';

describe('The test environment', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  it.each([[1], [42], [6453]])('should access game with seed ', function (seed: number) {
    expect(GameRunner).not.toBe(undefined);
    GameRunner.main(seed);
    expect(consoleSpy.mock.calls).toMatchSnapshot();
  });
});
