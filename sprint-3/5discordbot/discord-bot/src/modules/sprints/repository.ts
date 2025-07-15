import type { Insertable, Selectable } from 'kysely'
import { keys } from './schema'
import type { Sprint, Database } from '@/database'

const TABLE = 'sprint'

type Row = Sprint
type RowInsert = Insertable<Row>
type RowSelect = Selectable<Row>

export default (db: Database) => ({
  findAll(): Promise<RowSelect[]> {
    return db.selectFrom(TABLE).select(keys).execute()
  },

  findByCode(code: string): Promise<RowSelect | undefined> {
    return db
      .selectFrom(TABLE)
      .select(keys)
      .where('code', '=', code)
      .executeTakeFirst()
  },

  create(record: RowInsert): Promise<RowSelect | undefined> {
    return db
      .insertInto(TABLE)
      .values(record)
      .returning(keys)
      .executeTakeFirst()
  },
})
