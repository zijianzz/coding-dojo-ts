export class BeerSong {
  verse(number: number) {
    console.log(number);
  }

  sing(starting: number, ending = 0) {
    console.log(starting, ending);
  }
}