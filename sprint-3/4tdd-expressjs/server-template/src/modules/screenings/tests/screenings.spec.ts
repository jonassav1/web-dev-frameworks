import createTestDatabase from '@tests/utils/createTestDatabase'
import { createFor } from '@tests/utils/records'
import request from 'supertest'
import createApp from '@/app'

const db = await createTestDatabase()
const createMovies = createFor(db, 'movies')
const app = createApp(db)

describe('Post /screenings', () => {
  it('creates a screening', async () => {
    const [movie] = await createMovies([
      {
        title: 'test',
        year: 2025,
      },
    ])

    const res = await request(app).post('/screenings').send({
      movieId: movie.id,
      timestamp: '2030-01-01T18:00:00.000Z',
      totalTickets: 40,
    })
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({
      movieId: movie.id,
      timestamp: '2030-01-01T18:00:00.000Z',
      totalTickets: 40,
      ticketsLeft: 40,
    })
  })
})

const createScreening = createFor(db, 'screenings')

describe('GET /screenings', () => {
  it('should return existing screening with movie info', async () => {
    const [movie] = await createMovies([
      {
        title: 'test',
        year: 2025,
      },
    ])

    await createScreening([
      {
        movieId: movie.id!,
        timestamp: '2030-01-01T18:00:00.000Z',
        totalTickets: 40,
        ticketsLeft: 40,
      },
    ])
    const res = await request(app).get('/screenings').expect(200)

    expect(res.body).toContainEqual({
      id: expect.any(Number),
      movieId: movie.id,
      timestamp: '2030-01-01T18:00:00.000Z',
      totalTickets: 40,
      ticketsLeft: 40,
      movie: {
        title: movie.title,
        year: movie.year,
      },
    })
  })
})
