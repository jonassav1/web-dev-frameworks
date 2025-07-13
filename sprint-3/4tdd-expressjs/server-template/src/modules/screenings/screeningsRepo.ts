import type { Database } from '@/database'

export type Screening = {
  id: number
  movieId: number
  timestamp: string
  totalTickets: number
  ticketsLeft: number
}

export default function buildScreeningsRepository(db: Database) {
  return {
    async create({
      movieId,
      timestamp,
      totalTickets,
    }: {
      movieId: number
      timestamp: string
      totalTickets: number
    }): Promise<Screening> {
      const screening = await db
        .insertInto('screenings')
        .values({
          movieId,
          timestamp,
          totalTickets,
          ticketsLeft: totalTickets,
        })
        .returningAll()
        .executeTakeFirstOrThrow()

      return screening as Screening
    },
  }
}
