import { db } from './db.ts';
import * as schema from './schema.ts';

await db.insert(schema.movies).values([
  {
    title: 'The Matrix',
    releaseYear: 1999
  },
  {
    title: 'The Matrix Reloaded',
    releaseYear: 2003
  },
  {
    title: 'The Matrix Revolutions',
    releaseYear: 2003
  }
]);

console.log(`Seeding complete.`);
