import { Game } from './game';
import seedRandom from 'seedrandom';

export class GameRunner {
  public static main(seed: number): void {
    const random = seedRandom(seed);
    const game = new Game();
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');

    let notAWinner;
    do {
      game.roll(Math.floor(random() * 6) + 1);

      if (Math.floor(random() * 10) == 7) {
        notAWinner = game.wrongAnswer();
      } else {
        notAWinner = game.wasCorrectlyAnswered();
      }
    } while (notAWinner);
  }
}
GameRunner.main(1);
