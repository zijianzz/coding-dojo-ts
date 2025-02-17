import { projectEmployee } from '..';

describe('projectEmployee', () => {
  it('should get result', async () => {
    const result = await projectEmployee();

    expect(result).toEqual([
      { employee_id: 1, project_id: 1 },
      { employee_id: 3, project_id: 1 },
      { employee_id: 1, project_id: 2 },
    ]);
  });
});
