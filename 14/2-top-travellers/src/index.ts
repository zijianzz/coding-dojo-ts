import { CompiledQuery } from 'kysely';
import { db } from './db';

export async function topTravellers(): Promise<
  | {
      name: string;
      travelled_distance: number;
    }[]
  | undefined
> {
  const { rows } = await db.executeQuery<{
    name: string;
    travelled_distance: number;
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
