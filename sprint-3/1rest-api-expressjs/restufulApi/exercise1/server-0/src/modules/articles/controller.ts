import express, { Request, Response } from 'express'
import { getArticles, getArticleById, createArticle } from './model'

const router = express.Router()

router.get('/articles', (req: Request, res: Response) => {
  res.json(getArticles())
})

router.post('/articles', (req: Request, res: Response) => {
  const { title, content } = req.body
  if (typeof title !== 'string' || typeof content !== 'string') {
    return res.status(400).json({ error: 'Title and content must be strings' })
  }

  const newArticle = createArticle(title, content)
  res.status(201).json(newArticle)
})

router.get('/articles/:id', (req: Request, res: Response) => {
  try {
    throw new Error('boom!')
  } catch (e) {
    res.status(404).send('SMTH bad happened')
  }
})

export default router
