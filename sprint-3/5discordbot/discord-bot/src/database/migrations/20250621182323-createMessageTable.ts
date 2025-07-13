import { Kysely, SqliteDatabase } from 'kysely'

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('message')
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('username', 'text', (c) => c.notNull())
    .addColumn('sprintCode', 'text', (c) =>
      c.notNull().references('sprint.code')
    )
    .addColumn('templateId', 'integer', (c) =>
      c.notNull().references('template.id')
    )
    .addColumn('gifUrl', 'text', (c) => c.notNull())
    .execute()
}

export async function down(db: Kysely<SqliteDatabase>) {
  await db.schema.dropTable('message').execute()
}
