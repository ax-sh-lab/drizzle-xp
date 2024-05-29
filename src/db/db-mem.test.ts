import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

describe('In Memory db test', () => {
  console.log(3);
  it('should load in memory db', async () => {
    const sqlite = new Database(':memory:');
    const db = drizzle(sqlite);
    migrate(db, { migrationsFolder: './drizzle', migrationsSchema: './src/db/schema' });
  });
});
