import { applesOranges } from '..';

describe('applesOranges', () => {
  it('should get result', async () => {
    const result = await applesOranges();

    expect(result).toEqual([
      { diff: '2', sale_date: '2020-05-01' },
      { diff: '0', sale_date: '2020-05-02' },
      { diff: '20', sale_date: '2020-05-03' },
      { diff: '-1', sale_date: '2020-05-04' },
    ]);
  });
});
