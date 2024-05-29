import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);
migrate(db, { migrationsFolder: './drizzle' });
