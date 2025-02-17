import { CompiledQuery } from 'kysely';
import { db } from './db';

export async function projectEmployee(): Promise<
  | {
      employee_id: number;
      project_id: number;
    }[]
  | undefined
> {
  const { rows } = await db.executeQuery<{
    employee_id: number;
    project_id: number;
  }>(
    CompiledQuery.raw(
      // Complete the query to find result
      `
      SELECT 1
`,
    ),
  );
  return rows;
}
