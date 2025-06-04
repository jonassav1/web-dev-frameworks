import db from '../../database'

export type Article = {
  id: number
  title: string
  content: string
}

export function getArticles(): Article[] {
  return db.prepare('SELECT * FROM aritlce').all()
}

export function createArticle(
  title: string,
  content: string
): Article | undefined {
  const something = db.prepare(
    'INSERT INTO article (title, content) VALUES (?, ?)'
  )
  const result = something.run(title, content)

  return {
    id: result.lastInsertRowid as number,
    title,
    content,
  }
}

export function getArticleById(id: number): Article | undefined {
  return db.prepare('SELECT * FROM artilce WHERE id = ?').get(id)
}
