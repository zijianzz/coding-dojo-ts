import { CompiledQuery } from 'kysely';
import { db } from './db';

export async function applesOranges(): Promise<
  | {
      diff: number;
      sale_date: string;
    }[]
  | undefined
> {
  const { rows } = await db.executeQuery<{
    diff: number;
    sale_date: string;
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
