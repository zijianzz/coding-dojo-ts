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
    // WITH apples_sold AS (
    //   SELECT sold_num AS apples_sold_num, sale_date FROM sales where fruit = 'apples'
    // ),
    // oranges_sold AS (
    //   SELECT sold_num AS oranges_sold_num, sale_date FROM sales where fruit = 'oranges'
    // )
    // SELECT apples_sold.sale_date, apples_sold_num - oranges_sold_num as diff
    // FROM apples_sold
    // JOIN  oranges_sold ON apples_sold.sale_date = oranges_sold.sale_date
    // ORDER BY   apples_sold.sale_date ASC

    CompiledQuery.raw(
      // Complete the query to find result
      `
    SELECT 
      sale_date,
      SUM(
        CASE
          WHEN fruit = 'apples' THEN sold_num 
          WHEN fruit = 'oranges' THEN -sold_num
        END
      ) as diff
    FROM sales
    GROUP BY sale_date
    ORDER BY sale_date

`,
    ),
  );
  return rows;
}
