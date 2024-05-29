import { sql } from 'drizzle-orm';
import * as schema from 'drizzle-xp/src/db/schema.ts';

import { db } from './db.ts';

const query = sql`select "hello world" as text`;
const result = db.get<{ text: string }>(query);
console.table(result);

async function main() {
  const result = await db.select().from(schema.movies);
  console.table(result);
}
void main();
