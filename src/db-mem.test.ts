import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

describe('In Memory db test', () => {
  console.log(3);
  it('should load in memory db', async () => {
    const sqlite = new Database(':memory:');
    const db = drizzle(sqlite);
    migrate(db, { migrationsFolder: './drizzle' });
  });
});
