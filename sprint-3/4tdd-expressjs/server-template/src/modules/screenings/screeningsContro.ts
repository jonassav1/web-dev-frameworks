import { Router } from 'express'
import { z } from 'zod'
import type { Database } from '@/database'
import buildRepo from './screeningsRepo'
import findAllScreenings from './screeningsRepoFind'

export default (db: Database) => {
  const repo = buildRepo(db)
  const router = Router()

  router.post('/', async (req, res) => {
    const schema = z.object({
      movieId: z.number().int().positive(),
      timestamp: z.string().min(1),
      totalTickets: z.number().int().positive(),
    })

    const parse = schema.safeParse(req.body)
    if (!parse.success) {
      return res.status(400).json({ errors: parse.error.format() })
    }

    const { movieId, timestamp, totalTickets } = parse.data
    const screening = await repo.create({ movieId, timestamp, totalTickets })
    return res.status(201).json(screening)
  })
  const findRepo = findAllScreenings(db)
  router.get('/', async (req, res) => {
    const screenings = await findRepo.findAll()
    res.json(
      screenings.map((s) => ({
        id: s.id,
        movieId: s.movieId,
        timestamp: s.timestamp,
        totalTickets: s.totalTickets,
        ticketsLeft: s.ticketsLeft,
        movie: {
          title: s.movieTitle,
          year: s.movieYear,
        },
      }))
    )
  })

  // router.post('/', async (req, res) => {
  //   const schema = z.object({
  //     movieId: z.number().int().positive(),
  //     timestamp: z.string().min(1),
  //     totalTickets: z.number().int().positive(),
  //   })

  //   const parse = schema.safeParse(req.body)
  //   if (!parse.success) {
  //     return res.status(400).json({ errors: parse.error.format() })
  //   }

  //   const { movieId, timestamp, totalTickets } = parse.data
  //   const screening = await repo.create({ movieId, timestamp, totalTickets })
  //   return res.status(201).json(screening)
  // })

  return router
}
