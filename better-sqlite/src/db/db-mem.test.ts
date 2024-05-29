import Database from 'better-sqlite3';
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

import { movies } from './schema.ts';
import * as schema from './schema.ts';

describe('In Memory db test', () => {
  const sqlite = new Database(':memory:');
  const db = drizzle(sqlite);
  migrate(db, { migrationsFolder: './drizzle', migrationsSchema: './src/db/schema' });

  it('should query db', () => {
    const query = sql`select "hello world" as text`;
    const result = db.get<{ text: string }>(query);
    console.log(result);
    // expect(result).toBe('hello');
  });
  it('should load in memory db', async () => {
    console.log(db.select().from(schema.movies).get());
  });
});
