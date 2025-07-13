import { Kysely, SqliteDatabase } from 'kysely'

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('sprint')
    .addColumn('code', 'text', (c) => c.primaryKey().notNull())
    .addColumn('title', 'text', (c) => c.notNull())
    .execute()
}

export async function down(db: Kysely<SqliteDatabase>) {
  await db.schema.dropTable('sprint').execute()
}
