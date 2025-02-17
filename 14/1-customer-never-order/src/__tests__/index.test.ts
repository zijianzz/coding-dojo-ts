import { customerNeverOrder } from '..';

describe('customerNeverOrder', () => {
  it('should get result', async () => {
    const result = await customerNeverOrder();

    expect(result).toEqual([{ customers: 'Henry' }, { customers: 'Max' }]);
  });
});
