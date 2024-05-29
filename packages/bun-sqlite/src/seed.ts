import { faker } from '@faker-js/faker';

import { db } from './db';
import * as schema from './schema';

type Movie = { title: string; releaseYear: number };

function createRandomMovie(): Movie {
  return {
    title: faker.internet.userName(),
    releaseYear: faker.date.anytime().getFullYear()
  };
}

export const Movies: Movie[] = faker.helpers.multiple(createRandomMovie, {
  count: 5
});

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
  },
  ...Movies
]);

console.log(`Seeding complete.`);
