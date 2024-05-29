// import { db } from "./db";
// import { sql } from "drizzle-orm";
// const query = sql`select "hello world" as text`;
// const result = db.get<{ text: string }>(query);
// console.log(result);
import { db } from './db';
import * as schema from './schema';

const result = await db.select().from(schema.movies);
console.table(result);
