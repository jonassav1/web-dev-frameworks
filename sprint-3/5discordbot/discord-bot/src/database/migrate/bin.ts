import { migrateToLatest } from './index'
import { FileMigrationProvider, Kysely, SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'
import * as path from 'node:path'
import * as fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

async function migrateDefault(url: string) {
  const db = new Kysely({
    dialect: new SqliteDialect({
      database: new SQLite(url),
    }),
  })

  const dirname = path.dirname(fileURLToPath(import.meta.url))
  const provider = new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(dirname, '../migrations'),
  })

  const { results, error } = await migrateToLatest(provider, db)

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.info(`Migration "${it.migrationName}" was executed successfully.`)
    } else if (it.status === 'Error') {
      console.error(`Failed to execute migration "${it.migrationName}".`)
    }
  })

  if (error) {
    console.error('Failed to migrate.')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

const { DATABASE_URL } = process.env

if (typeof DATABASE_URL !== 'string') {
  throw new Error('Provide DATABASE_URL in your environment variables.')
}

migrateDefault(DATABASE_URL)
