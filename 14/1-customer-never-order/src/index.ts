import { CompiledQuery } from 'kysely';
import { db } from './db';

export async function customerNeverOrder(): Promise<{ customers: string }[] | undefined> {
  const { rows } = await db.executeQuery<{
    customers: string;
  }>(
    CompiledQuery.raw(
      // Complete the query to find result
      // SELECT name as customers FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE customer_id IS NULL;
      `
    SELECT name as customers FROM customers where id NOT IN (SELECT customer_id FROM orders);
`,
    ),
  );
  return rows;
}

