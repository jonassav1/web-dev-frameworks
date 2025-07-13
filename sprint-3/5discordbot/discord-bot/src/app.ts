import express from 'express'
import { type Database } from './database'
// import templateController from './modules/templates/controller'
// import sprintController from './modules/sprints/controller'
import messagesController from './modules/messages/controller'
import jsonErrorHandler from './middleware/jsonErrors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function createApp(db: Database) {
  const app = express()

  app.use(express.json())

  // register your controllers here

  // app.use('/templates', templateController(db))
  // app.use('/sprints', sprintController(db))
  app.use('/messages', messagesController(db))

  app.use(jsonErrorHandler)
  return app
}
