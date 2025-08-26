import { Game } from '../game';

describe('askQuestion', () => {
  let game;
  const playerName = 'Chet';

  beforeEach(() => {
    jest.resetAllMocks();
    game = new Game();
    game.add(playerName);
  });

  const consoleMock = jest.spyOn(console, 'log');
  it('should log the first question of the first category Pop', () => {
    game.askQuestion();
    expect(consoleMock).toHaveBeenCalledWith('Pop Question 0');
  });
  it('should log the first question of the second category Science', () => {
    game.places[0] = 1;
    game.askQuestion();
    expect(consoleMock).toHaveBeenCalledWith('Science Question 0');
  });
  it('should log the first question of the fourth category Rock', () => {
    game.places[0] = 3;
    game.askQuestion();
    expect(consoleMock).toHaveBeenCalledWith('Rock Question 0');
  });
  it('should log the first 2 questions of the third category Sports', () => {
    game.places[0] = 2;
    game.askQuestion();
    game.askQuestion();
    expect(consoleMock).toHaveBeenCalledWith('Sports Question 0');
    expect(consoleMock).toHaveBeenCalledWith('Sports Question 1');
  });
});

describe('isPlayable', () => {
  it('should not be playable', () => {
    const game = new Game();
    game.add('Chet');

    expect(game.isPlayable()).toBeFalsy();
  });

  it('should be playable', () => {
    const game = new Game();
    game.add('Chet');
    game.add('Toto');

    expect(game.isPlayable()).toBeTruthy();
  });
});
