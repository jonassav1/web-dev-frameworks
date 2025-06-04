import express, { Request, Response } from 'express'
import articleRouter from './modules/articles/controller'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  // req.params.id // /articles/:id
  // req.query // /articles?limit=10&offset=20
  // req.body // { title: '...', content: '...' } for POST, PATCH, PUT
  res.send('Hello world!')
})
app.use(articleRouter)
export default app

// import express from 'express'

// const app = express()

// app.use(express.json())
// app.use(logger)

// app
//   .route('/')
//   .get((req: Request, res: Response) => res.send('You make a GET request'))
//   .post((req: Request, res: Response) => res.send('You make a POST request'))
//   .put((req: Request, res: Response) => res.send('You make a PUT request'))
//   .all((req: Request, res: Response) => res.send('You make a X request'))
//   .delete((req: Request, res: Response) =>
//     res.send('You make a DELETE request')
//   )

// app.get('/', (req, res) => {
//   // req.params.id // /articles/:id
//   // req.query // /articles?limit=10&offset=20
//   // req.body // { title: '...', content: '...' } for POST, PATCH, PUT
//   console.log('hello worlds page')
//   res.send('Hello world!')
// })

// app.get('/articles', auth, (req, res) => {
//   console.log(`article can be accesed bc user is an admin = ${req.admin} `)
//   console.log('articles page')
//   res.status(201).send('Articles!')
// })

// app.get('/articles/:id', (req, res) => {
//   const { id } = req.params
//   const { title } = req.params
//   const { content } = req.params

//   console.log('articles with ids page')
//   res.send({
//     article: `article with ${id} and ${title} has ${content}`,
//   })
// })

// // next - function that we call( its a middleware) middleware is a funciton that takes request response and next and we can modify response
// function logger(req, res, next) {
//   console.log('Log')
//   next()
// }

// function auth(req, res, next) {
//   if (req.query.admin === 'true') {
//     req.admin = true
//     next()
//   } else {
//     res.send('no auth')
//   }
//   console.log('Auth')
//   next()
// }
// export default app
