import { z } from 'zod'
import type { Message } from '@/database'

type Record = Message

const schema = z.object({
  id: z.coerce.number().int().positive(),
  username: z.string().min(1).max(50),
  sprintCode: z.string().min(1).max(50),
  templateId: z.number().int().positive(),
  gifUrl: z.string().url(),
})

const insertable = schema.omit({
  id: true,
})

const updateable = insertable.partial()

export const parse = (record: unknown) => schema.parse(record)
export const parseId = (id: unknown) => schema.shape.id.parse(id)
export const parseInsertable = (record: unknown) => insertable.parse(record)
export const parseUpdateable = (record: unknown) => updateable.parse(record)
export const keys: (keyof Record)[] = Object.keys(
  schema.shape
) as (keyof z.infer<typeof schema>)[]
