/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from 'kysely'

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>

export interface Message {
  gifUrl: string
  id: Generated<number>
  sprintCode: string
  templateId: number
  username: string
}

export interface Sprint {
  code: string
  title: string
}

export interface Template {
  id: Generated<number>
  text: string
}

export interface DB {
  message: Message
  sprint: Sprint
  template: Template
}
