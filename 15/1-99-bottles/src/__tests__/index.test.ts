import { BeerSong } from '..';

describe('BeerSong', () => {
  let song: BeerSong;

  beforeEach(() => {
    song = new BeerSong();
  });

  describe('verse', () => {
    it('should return the verse corresponding to the verse 97', () => {
      expect(song.verse(97)).toEqual(
        '97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.',
      );
    });
    it('should return the verse corresponding to the verse 46', () => {
      expect(song.verse(46)).toEqual(
        '46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.',
      );
    });
    it('should return the verse corresponding to the verse 0', () => {
      expect(song.verse(0)).toEqual(
        'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.',
      );
    });
    it('should return the verse corresponding to the verse 1', () => {
      expect(song.verse(1)).toEqual(
        '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.',
      );
    });
    it('should return the verse corresponding to the verse 2', () => {
      expect(song.verse(2)).toEqual(
        '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.',
      );
    });
  });

  describe('sing', () => {
    it('should sing down from verse 97 to verse 95', () => {
      expect(song.sing(97, 95)).toEqual(
        '97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n\n' +
          '96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n\n' +
          '95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n\n',
      );
    });
  });
});
