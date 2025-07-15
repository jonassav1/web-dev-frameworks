import { jsonRoute } from '@/utils/middleware'
import * as Schema from './schema'
import { Database } from '@/database'
import buildRepository from './repository'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

export default (db: Database) => {
  const templates = buildRepository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      return templates.findAll()
    })
  )

  router.post(
    '/',
    jsonRoute(async (req, res) => {
      const body = Schema.parseInsertable(req.body)
      const created = await templates.create(body)
      return created
    }, StatusCodes.CREATED)
  )

  router.get(
    '/:id',
    jsonRoute(async (req, res) => {
      const id = Schema.parseId(req.params.id)
      const template = await templates.findByTemplateId(id)
      if (!template) {
        res.status(StatusCodes.NOT_FOUND)
        return { error: `Template with ID "${id}" not found` }
      }
      return template
    })
  )
  return router
}
