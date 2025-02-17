import { topTravellers } from '..';

describe('topTravellers', () => {
  it('should get result', async () => {
    const result = await topTravellers();

    expect(result).toEqual([
      { name: 'Elvis', travelled_distance: '450' },
      { name: 'Lee', travelled_distance: '450' },
      { name: 'Bob', travelled_distance: '317' },
      { name: 'Jonathan', travelled_distance: '312' },
      { name: 'Alex', travelled_distance: '222' },
      { name: 'Alice', travelled_distance: '120' },
      { name: 'Donald', travelled_distance: '0' },
    ]);
  });
});
