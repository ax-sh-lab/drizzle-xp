import { db } from './db/db.ts';
import * as schema from './db/schema.ts';

const result = await db.select().from(schema.movies);
console.table(result);
