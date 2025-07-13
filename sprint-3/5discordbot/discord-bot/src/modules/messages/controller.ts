import { Database } from '@/database'
import buildRepository from './repository'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as Schema from './schema'
import { jsonRoute } from '@/utils/middleware'

export default (db: Database) => {
  const messages = buildRepository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      return messages.findAll()
    })
  )

  router.post(
    '/',
    jsonRoute(async (req, res) => {
      const body = Schema.parseInsertable(req.body)
      const created = await messages.create(body)
      return created
    }, StatusCodes.CREATED)
  )

  router.get(
    '/user/:username',
    jsonRoute(async (req, res) => {
      const { username } = req.params
      return messages.findByUsername(username)
    })
  )

  router.get(
    '/sprint/:sprint',
    jsonRoute(async (req, res) => {
      const { sprint } = req.params
      return messages.findBySprint(sprint)
    })
  )

  return router
}
