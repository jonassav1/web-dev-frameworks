import type {
  ExpressionOrFactory,
  Insertable,
  Selectable,
  SqlBool,
} from 'kysely'
import { keys } from './schema'
import type { Message, Database, DB } from '@/database'

const TABLE = 'message'
type TableName = typeof TABLE
type Row = Message
type RowWithoutId = Omit<Row, 'id'>
type RowInsert = Insertable<RowWithoutId>
type RowSelect = Selectable<Row>

export default (db: Database) => ({
  findAll(): Promise<RowSelect[]> {
    return db.selectFrom(TABLE).select(keys).execute()
  },

  findById(id: number): Promise<RowSelect | undefined> {
    return db
      .selectFrom(TABLE)
      .select(keys)
      .where('id', '=', id)
      .executeTakeFirst()
  },

  findByUsername(username: string): Promise<RowSelect[]> {
    return db
      .selectFrom(TABLE)
      .select(keys)
      .where('username', '=', username)
      .execute()
  },

  findBySprint(sprintCode: string): Promise<RowSelect[]> {
    return db
      .selectFrom(TABLE)
      .select(keys)
      .where('sprintCode', '=', sprintCode)
      .execute()
  },

  find(
    expression: ExpressionOrFactory<DB, TableName, SqlBool>
  ): Promise<RowSelect[]> {
    return db.selectFrom(TABLE).select(keys).where(expression).execute()
  },

  create(record: RowInsert): Promise<RowSelect | undefined> {
    return db
      .insertInto(TABLE)
      .values(record)
      .returning(keys)
      .executeTakeFirst()
  },
})
