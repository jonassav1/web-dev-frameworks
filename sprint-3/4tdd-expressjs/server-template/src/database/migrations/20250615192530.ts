import { Kysely, SqliteDatabase } from 'kysely'

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('screenings')
    .ifNotExists()
    .addColumn('id', 'integer', (col) =>
      col.primaryKey().autoIncrement().notNull()
    )
    .addColumn('movieId', 'integer', (col) =>
      col.notNull().references('movies.id')
    )
    .addColumn('timestamp', 'text', (col) => col.notNull())
    .addColumn('totalTickets', 'integer', (col) => col.notNull())
    .addColumn('ticketsLeft', 'integer', (col) => col.notNull())
    .execute()
}

export async function down(db: Kysely<SqliteDatabase>) {
  await db.schema.dropTable('screenings').ifExists().execute()
}
