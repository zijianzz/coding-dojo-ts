const MAX_PLAYERS = 6;
const MIN_PLAYERS = 2;
const MAGIC_6 = 6;
const NB_CATEGORIES = 4;
const CATEGORIES = {
  POP: 'Pop',
  SCIENCE: 'Science',
  SPORT: 'Sports',
  ROCK: 'Rock',
};

export class Game {
  isGettingOutOfPenaltyBox: boolean = false;
  currentPlayer: number = 0;
  rockQuestions: string[] = [];
  sportsQuestions: string[] = [];
  scienceQuestions: string[] = [];
  popQuestions: string[] = [];
  inPenaltyBox: boolean[] = new Array(MAX_PLAYERS);
  purses: number[] = new Array(MAX_PLAYERS);
  places: number[] = new Array(MAX_PLAYERS);
  players: string[] = [];

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.popQuestions.push('Pop Question ' + i);
      this.scienceQuestions.push('Science Question ' + i);
      this.sportsQuestions.push('Sports Question ' + i);
      this.rockQuestions.push('Rock Question ' + i);
    }
  }

  add(playerName: string): boolean {
    if (this.players.length >= MAX_PLAYERS) {
      console.log('The game is full');
      return false;
    }
    this.players.push(playerName);
    const playerIndex = this.players.length - 1;
    this.places[playerIndex] = 0;
    this.purses[playerIndex] = 0;
    this.inPenaltyBox[playerIndex] = false;

    console.log(playerName + ' was added');
    console.log('They are player number ' + this.players.length);

    return true;
  }

  didPlayerWin() {
    return this.purses[this.currentPlayer] !== MAGIC_6;
  }

  currentCategory() {
    const modular = this.places[this.currentPlayer] % NB_CATEGORIES;
    const categories = [CATEGORIES.POP, CATEGORIES.SCIENCE, CATEGORIES.SPORT, CATEGORIES.ROCK];
    return categories[modular];
  }

  askQuestion() {
    const categoryQuestionsMap = {
      [CATEGORIES.POP]: this.popQuestions,
      [CATEGORIES.SCIENCE]: this.scienceQuestions,
      [CATEGORIES.SPORT]: this.sportsQuestions,
      [CATEGORIES.ROCK]: this.rockQuestions,
    };

    console.log(categoryQuestionsMap[this.currentCategory()].shift());
  }

  isPlayable(): boolean {
    return this.players.length >= MIN_PLAYERS;
  }

  roll(diceRoll: number) {
    console.log(this.players[this.currentPlayer] + ' is the current player');
    console.log('They have rolled a ' + diceRoll);

    if (this.inPenaltyBox[this.currentPlayer]) {
      if (diceRoll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        console.log(this.players[this.currentPlayer] + ' is getting out of the penalty box');
        this._movePlayerAndAskQuestion(diceRoll);
      } else {
        console.log(this.players[this.currentPlayer] + ' is not getting out of the penalty box');
        this.isGettingOutOfPenaltyBox = false;
      }
    } else {
      this._movePlayerAndAskQuestion(diceRoll);
    }
  }

  _movePlayerAndAskQuestion(diceRoll: number) {
    this.places[this.currentPlayer] = this.places[this.currentPlayer] + diceRoll;
    if (this.places[this.currentPlayer] > 11) {
      this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
    }

    console.log(this.players[this.currentPlayer] + "'s new location is " + this.places[this.currentPlayer]);
    console.log('The category is ' + this.currentCategory());
    this.askQuestion();
  }

  wasCorrectlyAnswered() {
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (this.isGettingOutOfPenaltyBox) {
        console.log('Answer was correct!!!!');
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

        this.purses[this.currentPlayer] += 1;
        console.log(this.players[this.currentPlayer] + ' now has ' + this.purses[this.currentPlayer] + ' Gold Coins.');

        const winner = this.didPlayerWin();

        return winner;
      } else {
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        return true;
      }
    } else {
      console.log('Answer was correct!!!!');

      this.currentPlayer += 1;
      if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
      this.purses[this.currentPlayer] += 1;
      console.log(this.players[this.currentPlayer] + ' now has ' + this.purses[this.currentPlayer] + ' Gold Coins.');

      const winner = this.didPlayerWin();

      return winner;
    }
  }

  wrongAnswer() {
    console.log('Question was incorrectly answered');
    console.log(this.players[this.currentPlayer] + ' was sent to the penalty box');
    this.inPenaltyBox[this.currentPlayer] = true;

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
    return true;
  }
}
