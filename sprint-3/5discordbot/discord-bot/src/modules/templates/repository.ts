import type { Insertable, Selectable } from 'kysely'
import { keys } from './schema'
import type { Template, Database } from '@/database'

const TABLE = 'template'

type Row = Template
type RowInsert = Insertable<Row>
type RowSelect = Selectable<Row>

export default (db: Database) => ({
  findAll(): Promise<RowSelect[]> {
    return db.selectFrom(TABLE).select(keys).execute()
  },

  findByTemplateId(id: number): Promise<RowSelect | undefined> {
    return db
      .selectFrom(TABLE)
      .select(keys)
      .where('id', '=', id)
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
