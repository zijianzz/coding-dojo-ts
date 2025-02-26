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
      WITH travelled_distances AS (
        SELECT user_id, SUM(distance) as travelled_distance FROM rides GROUP BY user_id
      )
        SELECT users.name, COALESCE(travelled_distances.travelled_distance, 0) AS travelled_distance
        FROM users
        LEFT JOIN travelled_distances ON users.id = travelled_distances.user_id 
        ORDER BY travelled_distance DESC, users.name ASC;
`,
    ),
  );
  return rows;
}
