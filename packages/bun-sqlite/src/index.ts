import { sql } from 'drizzle-orm';

import { db } from './db.ts';

const query = sql`select "hello world" as text`;
const result = db.get<{ text: string }>(query);
console.table(result);
