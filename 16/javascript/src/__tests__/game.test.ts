import { GameRunner } from '../game-runner';

describe('The test environment', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should access game', function () {
    expect(GameRunner).not.toBe(undefined);
  });
});
