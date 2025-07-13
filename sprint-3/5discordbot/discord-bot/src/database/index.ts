import { CamelCasePlugin, Kysely, SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'
import { type DB } from './types'

export default function createDatabase(url: string) {
  return new Kysely<DB>({
    dialect: new SqliteDialect({
      database: new SQLite(url),
    }),
  })
}

export type Database = Kysely<DB>
export * from './types'
