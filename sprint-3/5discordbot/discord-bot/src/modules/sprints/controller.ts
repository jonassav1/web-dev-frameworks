import { Database } from '@/database'
import buildRepository from './repository'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as Schema from './schema'
import { jsonRoute } from '@/utils/middleware'

export default (db: Database) => {
  const sprints = buildRepository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      return sprints.findAll()
    })
  )

  router.post(
    '/',
    jsonRoute(async (req, res) => {
      const body = Schema.parseInsertable(req.body)
      const created = await sprints.create(body)
      return created
    }, StatusCodes.CREATED)
  )

  router.get(
    '/:code',
    jsonRoute(async (req, res) => {
      const code = Schema.parseId(req.params.code)
      const sprint = await sprints.findByCode(code)
      if (!sprint) {
        res.status(StatusCodes.NOT_FOUND)
        return { error: `Sprint "${code}" not found` }
      }
      return sprint
    })
  )
  return router
}
