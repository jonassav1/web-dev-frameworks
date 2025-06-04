// By convention we name our migration files with a timestamp
// to make sure that there is a clear order in which migrations are run.
// Using an incrementing numeric ID would cause issues if 2 developers
// created separate migrations with the same ID on their git branches.
import { type Database } from 'better-sqlite3'

// For our simple migration system to work, we need to export
// a timestamp and an up function.
export const timestamp = new Date('2025-05-29T19:25:57Z')

export function up(db: Database) {
  // We are using a singular table name "article" as it will make
  // some code generation tools easier to use in upcoming parts.
  const query = `
    ALTER TABLE article ADD COLUMN content TEXT NOT NULL DEFAULT '';
  `

  db.exec(query)
}
