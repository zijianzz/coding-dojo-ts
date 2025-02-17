import { CompiledQuery } from 'kysely';
import { db } from './db';

export async function customerNeverOrder(): Promise<{ customers: string }[] | undefined> {
  const { rows } = await db.executeQuery<{
    customers: string;
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
