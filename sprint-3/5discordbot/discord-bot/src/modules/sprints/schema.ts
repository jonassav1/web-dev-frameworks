import { z } from 'zod'

const schema = z.object({
  code: z.coerce.string().min(1).max(50),
  title: z.string().min(1).max(100),
})

const insertable = schema

const updateable = insertable.partial()

export const parse = (record: unknown) => schema.parse(record)
export const parseId = (code: unknown) => schema.shape.code.parse(code)
export const parseInsertable = (record: unknown) => insertable.parse(record)
export const parseUpdateable = (record: unknown) => updateable.parse(record)
export const keys = Object.keys(schema.shape) as (keyof z.infer<
  typeof schema
>)[]
