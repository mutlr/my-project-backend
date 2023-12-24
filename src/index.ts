import express from 'express'
const app = express()

import { PORT } from './util/config'
import * as db from './util/db'
import userRouter from './controllers/users'

app.use(express.json())
app.use('/users', userRouter)

const start = async (): Promise<void> => {
  await db.connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()