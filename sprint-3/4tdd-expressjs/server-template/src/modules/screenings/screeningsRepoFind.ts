import type { Database } from '@/database'

export type Screening = {
  id: number
  movieId: number
  timestamp: string
  totalTickets: number
  ticketsLeft: number
}
const findAllScreenings = (db: Database) => ({
  async findAll() {
    return db
      .selectFrom('screenings')
      .innerJoin('movies', 'movies.id', 'screenings.movieId')
      .select([
        'screenings.id',
        'screenings.movieId',
        'screenings.timestamp',
        'screenings.totalTickets',
        'screenings.ticketsLeft',
        'movies.title as movieTitle',
        'movies.year as movieYear',
      ])
      .execute()
  },
})

export default findAllScreenings
