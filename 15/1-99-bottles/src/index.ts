export class BeerSong {
  verse(number: number): string {
    const sAddition = (num: number) => (num != 1 ? 's' : '');
    const numberOrNoMore = (capitalLetter: boolean, num: number) =>
      num === 0 ? (capitalLetter ? 'No more' : 'no more') : num;
    const itOrOne = (num: number) => (num === 1 ? 'it' : 'one');

    const part1 = `${numberOrNoMore(true, number)} bottle${sAddition(number)} of beer on the wall, ${numberOrNoMore(
      false,
      number,
    )} bottle${sAddition(number)} of beer.`;

    const part2 =
      number === 0
        ? 'Go to the store and buy some more, 99 bottles of beer on the wall.'
        : `Take ${itOrOne(number)} down and pass it around, ${numberOrNoMore(false, number - 1)} bottle${sAddition(
            number - 1,
          )} of beer on the wall.`;

    return `${part1}\n${part2}`;
  }

  sing(starting: number, ending = 0): string {
    const result = [];
    for (let n = starting; n >= ending; n--) {
      result.push(this.verse(n));
    }
    console.log(result.join('\n\n'));
    return result.join('\n\n');
  }
}
