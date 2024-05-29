import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);
